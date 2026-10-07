#!/usr/bin/env bash

## Configure Bash aliases
tee -a ~/.bash_aliases > /dev/null <<"EOF"
alias tree='tree --dirsfirst -A -F'
alias jpegoptim='jpegoptim --strip-all --all-progressive'
alias optipng='optipng -o5 -strip all -fix'
EOF

## Enable globstar option for recursive globbing
tee -a ~/.bashrc > /dev/null <<"EOF"
shopt -s globstar nullglob
EOF

## Install required packages
# Update packages list
sudo apt update

# Install packages to optimize images (jpegoptim, optipng)
sudo apt install --yes jpegoptim optipng

# Install packages to optimize documents (ps2pdf)
sudo apt install --yes ghostscript

## Setup Python virtual environment and install dependencies
# Create virtual environment
python3 -m venv .venv

# Activate virtual environment and install dependencies
source .venv/bin/activate
pip install --upgrade pip

pip install -r requirements.txt

# Display helpful message
echo ""
echo "=============================================="
echo "  🚀 Development environment ready!"
echo "  Run 'zensical serve' to start the dev server"
echo "  Site will be available at http://localhost:8000"
echo "=============================================="

