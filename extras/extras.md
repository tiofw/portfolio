## Extras


# Terminal command to batch convert from heic to png

for f in *.heic; do
    sips -s format png "$f" --out "${f%.heic}.png"
done


# Terminal command to batch convert from popular image formats to webp
n.b. case-sensitive: will not convert .Png or .JPG

for f in *.{png,jpg,jpeg,gif,bmp}(N); do
    cwebp -q 85 "$f" -o "${f%.*}.webp"
done
