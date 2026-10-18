#!/usr/bin/env bash

# Génère les PDF à imprimer (impressions/*.html → docs/ressources-enseignement/*.pdf)
# avec un navigateur Chrome/Chromium en mode headless.

# Stop on first error
set -euo pipefail

## Variables
INPUT_DIR="impressions"
OUTPUT_DIR="docs/ressources-enseignement"

## Script
CHROME=""
for candidate in google-chrome chromium chromium-browser; do
    if command -v "$candidate" > /dev/null 2>&1; then
        CHROME="$candidate"
        break
    fi
done

if [ -z "$CHROME" ]; then
    echo "Chrome ou Chromium est nécessaire pour générer les PDF." >&2
    exit 1
fi

mkdir -p "$OUTPUT_DIR"

for input in "$INPUT_DIR"/*.html; do
    name=$(basename "$input" .html)
    output="$OUTPUT_DIR/$name.pdf"
    echo "Converting $input to $output..."
    "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
        --allow-file-access-from-files \
        --print-to-pdf="$output" "file://$(pwd)/$input" 2> /dev/null
done

# Documents Markdown + LaTeX (impressions/*.md), générés avec pandoc
PANDOC_DOCKER_IMAGE="pandoc/latex"

for input in "$INPUT_DIR"/*.md; do
    name=$(basename "$input" .md)
    output="$OUTPUT_DIR/$name.pdf"
    echo "Converting $input to $output..."
    docker run --rm \
        --volume "$(pwd):/data" \
        --user "$(id -u):$(id -g)" \
        "$PANDOC_DOCKER_IMAGE" -o "$output" "$input"
done

echo ""
echo "All PDFs generated in: $OUTPUT_DIR"
ls -la "$OUTPUT_DIR"/*.pdf
