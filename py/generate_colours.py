from PIL import Image
from colorsys import rgb_to_hls, hls_to_rgb
import os
import json

# This is a python script to batch process images in a folder
# and return two colours based on those images
# these colours can then be used for background gradients
# the colours chosen will be lightened as necessary (via HSL)
# in order for them to contrast with black text


# Requires Pillow: install with
#   python3 -m venv .venv
#   source .venv/bin/activate
#   pip install Pillow

# Put all icons you want to examine in the icons subfolder
# Call using
#   source .venv/bin/activate
#   python3 generate_colours.py
#   deactivate                      <-- to exit virtual environment

ICON_FOLDER = "icons"


def extract_colours(filename):
    img = Image.open(filename).convert("RGBA")

    # Reduce image size for speed
    img.thumbnail((100,100))

    pixels = []

    for r,g,b,a in img.getdata():

        if a < 128:
            continue

        # Ignore white backgrounds
        if r > 240 and g > 240 and b > 240:
            continue

        # Ignore black borders
        if r < 20 and g < 20 and b < 20:
            continue

        h,l,s = rgb_to_hls(
            r/255,
            g/255,
            b/255
        )

        # Ignore dull grey colours
        if s < 0.20:
            continue

        # Weight saturated colours more heavily
        weight = s * 3

        pixels.append(
            (
                r,
                g,
                b,
                weight
            )
        )


    if not pixels:
        return [(128,128,128),(180,180,180)]


    # Sort by colour weight
    pixels.sort(
        key=lambda p:p[3],
        reverse=True
    )


    # Simple clustering:
    # pick strongest colour,
    # then a sufficiently different second colour

    primary = pixels[0]

    secondary = primary

    for colour in pixels[1:]:
        distance = sum(
            abs(colour[i]-primary[i])
            for i in range(3)
        )

        if distance > 80:
            secondary = colour
            break


    return [
        primary[:3],
        secondary[:3]
    ]


def set_lightness(rgb, target):

    r,g,b = rgb

    h,l,s = rgb_to_hls(
        r/255,
        g/255,
        b/255
    )

    r,g,b = hls_to_rgb(
        h,
        target,
        s
    )

    return (
        round(r*255),
        round(g*255),
        round(b*255)
    )


def rgb_string(rgb):

    return (
        f"rgb({rgb[0]},{rgb[1]},{rgb[2]})"
    )


results = {}


for filename in os.listdir(ICON_FOLDER):

    if filename.lower().endswith(
        (".png",".webp",".jpg",".jpeg")
    ):

        path = os.path.join(
            ICON_FOLDER,
            filename
        )

        colours = extract_colours(path)


        bg1 = set_lightness(
            colours[0],
            0.75
        )

        bg2 = set_lightness(
            colours[1],
            0.65
        )


        results[filename] = {
            "colour_bg1": rgb_string(bg1),
            "colour_bg2": rgb_string(bg2)
        }


        print(
            filename,
            "=>",
            results[filename]
        )


with open(
    "generated_colours.json",
    "w"
) as f:

    json.dump(
        results,
        f,
        indent=4
    )
