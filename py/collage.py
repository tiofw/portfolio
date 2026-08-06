#!/usr/bin/env python3

"""
Create an MP4 video collage.

Requirements:
    ffmpeg
    ffprobe

Example:
    python collage.py ./clips output.mp4

"""

import argparse
import json
import math
import shutil
import subprocess
import sys
from pathlib import Path


# ------------------------------------------------------------
# Helpers
# ------------------------------------------------------------

def require(program):
    if shutil.which(program) is None:
        sys.exit(f"{program} not found in PATH")


def run(cmd):
    result = subprocess.run(
        cmd,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True
    )

    if result.returncode:
        print(result.stderr)
        sys.exit(result.returncode)

    return result.stdout


def natural_key(path):
    import re
    return [
        int(x) if x.isdigit() else x.lower()
        for x in re.split(r"(\d+)", path.name)
    ]


def probe_dimensions(filename):

    cmd = [
        "ffprobe",
        "-v", "quiet",
        "-print_format", "json",
        "-show_streams",
        filename
    ]

    data = json.loads(run(cmd))

    for stream in data["streams"]:
        if stream["codec_type"] == "video":
            return (
                int(stream["width"]),
                int(stream["height"])
            )

    raise RuntimeError(filename)


# ------------------------------------------------------------
# Grid selection
# ------------------------------------------------------------

def choose_grid(count, w, h, target):

    best = None

    for rows in range(1, count + 1):

        cols = math.ceil(count / rows)

        width = cols * w
        height = rows * h

        aspect = width / height

        aspect_error = abs(aspect - target)

        blanks = rows * cols - count

        score = (
            aspect_error + blanks * 0.15,
            blanks,
            abs(rows - cols)
        )

        if best is None or score < best[0]:
            best = (
                score,
                rows,
                cols
            )

    return best[1], best[2]


# ------------------------------------------------------------
# Layout generation
# ------------------------------------------------------------

def build_layout(
        count,
        rows,
        cols,
        w,
        h,
        gap):

    positions = []

    canvas_w = cols * w + (cols - 1) * gap
    canvas_h = rows * h + (rows - 1) * gap

    for index in range(rows * cols):

        r = index // cols
        c = index % cols

        # Empty cells in final row
        if index >= count:
            continue

        x = c * (w + gap)
        y = r * (h + gap)

        # Centre incomplete final row
        if r == rows - 1:

            remaining = count - r * cols

            if remaining < cols:

                row_width = (
                    remaining * w
                    + (remaining - 1) * gap
                )

                offset = (
                    canvas_w - row_width
                ) // 2

                x += offset

        positions.append(f"{x}_{y}")

    return "|".join(positions), canvas_w, canvas_h


# ------------------------------------------------------------
# Main
# ------------------------------------------------------------

def main():

    parser = argparse.ArgumentParser()

    parser.add_argument("folder")
    parser.add_argument("output")

    parser.add_argument(
        "--aspect",
        default="16:9"
    )

    parser.add_argument(
        "--gap",
        type=int,
        default=2
    )

    parser.add_argument(
        "--background",
        default="black"
    )

    parser.add_argument(
        "--crf",
        type=int,
        default=24
    )

    parser.add_argument(
        "--preset",
        default="slow"
    )

    parser.add_argument(
        "--dry-run",
        action="store_true"
    )

    args = parser.parse_args()


    require("ffmpeg")
    require("ffprobe")


    folder = Path(args.folder)

    videos = sorted(
        folder.glob("*.mp4"),
        key=natural_key
    )

    if not videos:
        sys.exit("No MP4 files found")


    w, h = probe_dimensions(str(videos[0]))

    for video in videos[1:]:
        if probe_dimensions(str(video)) != (w, h):
            sys.exit(
                f"{video.name}: dimensions differ"
            )


    a, b = args.aspect.split(":")
    target = float(a) / float(b)


    rows, cols = choose_grid(
        len(videos),
        w,
        h,
        target
    )


    layout, width, height = build_layout(
        len(videos),
        rows,
        cols,
        w,
        h,
        args.gap
    )


    # H265-friendly width alignment
    padding = (-width) % 4

    if padding:
        width += padding


    print(
        f"{len(videos)} clips -> "
        f"{rows}x{cols} grid "
        f"({width}x{height})"
    )


    cmd = ["ffmpeg", "-y"]

    for video in videos:
        cmd += ["-i", str(video)]


    filtergraph = (
        f"xstack="
        f"inputs={len(videos)}:"
        f"layout={layout}:"
        f"fill={args.background}"
    )

    if padding:
        filtergraph += (
            f",pad={width}:{height}:0:0:{args.background}"
        )


    cmd += [
        "-filter_complex",
        filtergraph,
        "-c:v",
        "libx265",
        "-crf",
        str(args.crf),
        "-preset",
        args.preset,
        "-an",
        args.output
    ]


    print("\nFFmpeg:")
    print(" ".join(cmd))
    print()


    if not args.dry_run:
        subprocess.run(cmd)


if __name__ == "__main__":
    main()
