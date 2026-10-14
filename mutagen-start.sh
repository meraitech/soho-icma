#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"

REMOTE="ifal@192.168.100.145"
REMOTE_DIR="~/workspace/business/orphic/clients/soho-icma"

command -v mutagen >/dev/null || { echo "error: mutagen not installed"; exit 1; }

echo "==> ensuring remote dir exists ($REMOTE:$REMOTE_DIR)"
ssh "$REMOTE" "mkdir -p $REMOTE_DIR"

echo "==> starting sync"
mutagen project start

echo "==> status"
mutagen sync list
