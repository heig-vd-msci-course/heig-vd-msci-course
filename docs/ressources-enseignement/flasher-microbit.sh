#!/usr/bin/env bash
# ============================================================
# Copy a .hex file onto connected micro:bit boards (Linux)
# ============================================================
#
# Usage:
#   ./flasher-microbit.sh fichier.hex          # one board (asks if several)
#   ./flasher-microbit.sh --all fichier.hex    # every connected board, one after the other
#
# Why: on Linux, dragging the file with the file manager often fails
# (FAIL.TXT "The transfer timed out", error 504 on the board), because the
# kernel delays and reorders the writes. This script writes synchronously,
# waits for the board to remount, then checks FAIL.TXT and retries once.
# ============================================================

set -euo pipefail

LABEL="MICROBIT"
REMOUNT_TIMEOUT=40   # seconds to wait for the board to come back
RETRIES=2            # attempts per board

usage() {
    echo "Usage : $(basename "$0") [--all] fichier.hex"
    echo
    echo "  --all   programmer toutes les cartes branchées, l'une après l'autre"
    exit 1
}

die() {
    echo "Erreur : $*" >&2
    exit 1
}

# ---------- Arguments ----------
ALL=false
HEX=""
for arg in "$@"; do
    case "$arg" in
        --all|-a) ALL=true ;;
        -h|--help) usage ;;
        *) HEX="$arg" ;;
    esac
done
[[ -n "$HEX" ]] || usage
[[ -f "$HEX" ]] || die "fichier introuvable : $HEX"
[[ "${HEX,,}" == *.hex ]] || die "le fichier doit avoir l'extension .hex : $HEX"

# ---------- Helpers ----------

# Mount points of the boards currently mounted (lsblk -r escapes spaces as \x20)
mounted_boards() {
    lsblk -rno LABEL,MOUNTPOINT | while read -r label mountpoint; do
        if [[ "$label" == "$LABEL" && -n "$mountpoint" ]]; then
            printf '%b\n' "$mountpoint"
        fi
    done
}

# Mount the boards that are plugged in but not mounted yet
mount_missing_boards() {
    lsblk -rno NAME,LABEL,MOUNTPOINT | while read -r name label mountpoint; do
        if [[ "$label" == "$LABEL" && -z "${mountpoint:-}" ]]; then
            udisksctl mount -b "/dev/$name" > /dev/null 2>&1 || true
        fi
    done
}

# Unique ID of a board, read from its DETAILS.TXT (survives the remount)
board_id() {
    grep -m1 '^Unique ID' "$1/DETAILS.TXT" 2>/dev/null | awk '{print $3}'
}

# Current mount point of the board with this Unique ID
mount_of_id() {
    local mountpoint
    while read -r mountpoint; do
        if [[ "$(board_id "$mountpoint")" == "$1" ]]; then
            echo "$mountpoint"
            return 0
        fi
    done < <(mounted_boards)
    return 1
}

# Copy the file, wait for the remount, check FAIL.TXT
flash_board() {
    local id="$1" attempt mountpoint
    for (( attempt = 1; attempt <= RETRIES; attempt++ )); do
        mountpoint="$(mount_of_id "$id")" || { echo "  Carte $id introuvable."; return 1; }
        echo "  Copie en cours (essai $attempt/$RETRIES)... ne pas débrancher la carte"
        dd if="$HEX" of="$mountpoint/$(basename "$HEX")" bs=64k oflag=sync status=none || true
        sync

        # The board disconnects, installs the program, then mounts again
        sleep 5
        local waited=5
        until mountpoint="$(mount_of_id "$id")"; do
            mount_missing_boards
            sleep 1
            (( ++waited ))
            if (( waited >= REMOUNT_TIMEOUT )); then
                echo "  La carte n'est pas revenue après ${REMOUNT_TIMEOUT} s. Vérifier le câble."
                return 1
            fi
        done

        if [[ -f "$mountpoint/FAIL.TXT" ]]; then
            echo "  Échec : $(head -n1 "$mountpoint/FAIL.TXT")"
        else
            echo "  OK : le programme tourne sur la carte."
            return 0
        fi
    done
    return 1
}

# ---------- Find the boards ----------
mount_missing_boards
sleep 1
mapfile -t BOARDS < <(mounted_boards)
(( ${#BOARDS[@]} > 0 )) || die "aucun micro:bit trouvé. Brancher la carte en USB (LED jaune allumée au dos)."

if (( ${#BOARDS[@]} > 1 )) && ! $ALL; then
    echo "Plusieurs micro:bit sont branchés :"
    for i in "${!BOARDS[@]}"; do
        echo "  $((i + 1)). ${BOARDS[$i]} (carte $(board_id "${BOARDS[$i]}"))"
    done
    read -r -p "Numéro de la carte à programmer (ou « a » pour toutes) : " choice
    if [[ "$choice" == "a" ]]; then
        ALL=true
    elif [[ "$choice" =~ ^[0-9]+$ ]] && (( choice >= 1 && choice <= ${#BOARDS[@]} )); then
        BOARDS=("${BOARDS[$((choice - 1))]}")
    else
        die "choix invalide : $choice"
    fi
fi

# Remember the boards by Unique ID: mount points can change after each copy
IDS=()
for mountpoint in "${BOARDS[@]}"; do
    IDS+=("$(board_id "$mountpoint")")
done

# ---------- Flash, one board after the other ----------
echo "Fichier : $(basename "$HEX")"
failed=0
for i in "${!IDS[@]}"; do
    echo "Carte $((i + 1))/${#IDS[@]} : ${IDS[$i]}"
    flash_board "${IDS[$i]}" || (( ++failed ))
done

if (( failed > 0 )); then
    die "$failed carte(s) n'ont pas pu être programmées."
fi
echo "Terminé."
