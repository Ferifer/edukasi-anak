#!/bin/bash

# Simple script to create placeholder PWA icons
# This creates basic colored squares with text for testing

echo "Creating placeholder PWA icons..."

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "ImageMagick not found. Please install it or create icons manually."
    echo "See public/ICON_INSTRUCTIONS.md for details."
    exit 1
fi

# Create 512x512 icon with gradient and emoji
convert -size 512x512 \
    gradient:#667eea-#764ba2 \
    -gravity center \
    -pointsize 200 \
    -font Arial \
    -fill white \
    -annotate +0+0 "🎓" \
    public/icon-512.png

echo "Created icon-512.png"

# Create 192x192 icon from 512x512
convert public/icon-512.png -resize 192x192 public/icon-192.png

echo "Created icon-192.png"

echo "✅ Placeholder icons created successfully!"
echo "You can replace these with custom designs later."
