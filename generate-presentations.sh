#!/usr/bin/env bash

# Stop on first error so CI fails loudly
set -euo pipefail

## Variables
WORKDIR=$(pwd)
MARP_DOCKER_IMAGE="marpteam/marp-cli:v4.2.3"
INPUT_DIR="presentations"
OUTPUT_DIR="docs/slides"

## Script
# Check if Marp is installed locally (the Docker image ships `marp-cli.js`)
if command -v "marp-cli.js" > /dev/null 2>&1; then
    echo "Marp installed locally, using it..."
    MARP_CMD=(marp-cli.js)
elif [ -x "node_modules/.bin/marp" ]; then
    echo "Using Marp from node_modules..."
    MARP_CMD=(node_modules/.bin/marp)
else
    echo "Marp not installed, using its Docker image..."
    MARP_CMD=(
        docker run --rm
        --entrypoint="marp-cli.js"
        --volume="${WORKDIR}:/home/marp/app"
        --user="$(id -u):$(id -g)"
        "$MARP_DOCKER_IMAGE"
    )
fi

# Create output directory
mkdir -p "$OUTPUT_DIR"

echo "Removing all previous generated presentations..."
rm -f "$OUTPUT_DIR"/*.html "$OUTPUT_DIR"/*.pdf

MARP_ARGS=(
    --config-file .marp/config.yaml
    --input-dir "$INPUT_DIR"
    --output "$OUTPUT_DIR"
)

echo "Converting presentations to HTML..."
"${MARP_CMD[@]}" "${MARP_ARGS[@]}"

echo "Converting presentations to PDF..."
"${MARP_CMD[@]}" "${MARP_ARGS[@]}" --pdf

echo ""
echo "All presentations processed!"
echo "Output files in: $OUTPUT_DIR"
ls -la "$OUTPUT_DIR"
