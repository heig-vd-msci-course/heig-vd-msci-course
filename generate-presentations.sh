#!/usr/bin/env bash

## Variables
WORKDIR=$(pwd)
MARP_DOCKER_IMAGE="marpteam/marp-cli:v4.2.3"
OUTPUT_DIR="docs/slides"
THEME_FILE=".marp/theme.css"

## Script
# Check if Marp is installed locally
if command -v "marp" > /dev/null 2>&1; then
    echo "Marp installed locally, using it..."
    USE_DOCKER=false
elif command -v "npx" > /dev/null 2>&1 && [ -f "package.json" ]; then
    echo "Using npx marp..."
    USE_DOCKER=false
else
    echo "Marp not installed, using its Docker image..."
    USE_DOCKER=true
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "Removing all previous generated presentations..."
rm -f "$OUTPUT_DIR"/*.html
rm -f "$OUTPUT_DIR"/*.pdf

echo "Converting presentations..."

for file in presentations/*.md; do
    if [ -f "$file" ]; then
        filename=$(basename "$file" .md)
        echo "  Processing: $file"

        if [ "$USE_DOCKER" = true ]; then
            # Docker version - generate HTML
            docker run --rm \
                --volume="${WORKDIR}:/home/marp/app" \
                --user="$(id -u):$(id -g)" \
                "$MARP_DOCKER_IMAGE" \
                --theme-set "$THEME_FILE" \
                --output "${OUTPUT_DIR}/${filename}.html" \
                -- "$file"

            # Docker version - generate PDF
            docker run --rm \
                --volume="${WORKDIR}:/home/marp/app" \
                --user="$(id -u):$(id -g)" \
                "$MARP_DOCKER_IMAGE" \
                --theme-set "$THEME_FILE" \
                --pdf \
                --allow-local-files \
                --output "${OUTPUT_DIR}/${filename}.pdf" \
                -- "$file"
        else
            # Local version - generate HTML
            npx marp \
                --theme-set "$THEME_FILE" \
                --output "${OUTPUT_DIR}/${filename}.html" \
                -- "$file"

            # Local version - generate PDF
            npx marp \
                --theme-set "$THEME_FILE" \
                --pdf \
                --allow-local-files \
                --output "${OUTPUT_DIR}/${filename}.pdf" \
                -- "$file"
        fi
    fi
done

echo ""
echo "All presentations processed!"
echo "Output files in: $OUTPUT_DIR"
ls -la "$OUTPUT_DIR"
