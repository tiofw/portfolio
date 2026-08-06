#!/usr/bin/env python3

"""
Join MP4 files in alphabetical/natural order.

Uses stream copy:
    - no re-encoding
    - no quality loss
    - extremely fast

Example:
    python concat.py ./clips joined.mp4
"""

import argparse
import re
import subprocess
import tempfile
from pathlib import Path


def natural_key(path):

    return [
        int(x) if x.isdigit() else x.lower()
        for x in re.split(r"(\d+)", path.name)
    ]


def main():

    parser = argparse.ArgumentParser()

    parser.add_argument("folder")
    parser.add_argument("output")

    args = parser.parse_args()


    folder = Path(args.folder)

    videos = sorted(
        folder.glob("*.mp4"),
        key=natural_key
    )

    if not videos:
        raise SystemExit("No MP4 files found")


    with tempfile.NamedTemporaryFile(
        mode="w",
        suffix=".txt",
        delete=False
    ) as f:

        for video in videos:
            f.write(
                f"file '{video.resolve()}'\n"
            )

        filename = f.name


    cmd = [
        "ffmpeg",
        "-y",
        "-f",
        "concat",
        "-safe",
        "0",
        "-i",
        filename,
        "-c",
        "copy",
        "-an",
        args.output
    ]


    print("Joining:")
    for v in videos:
        print(" ", v.name)

    subprocess.run(cmd)


if __name__ == "__main__":
    main()
