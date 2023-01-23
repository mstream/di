#!/usr/bin/env sh

# Fixes DocType links
# Replace relative markdown links with absolute

set -e
script_dir=$(CDPATH="" cd -- "$(dirname -- "$0")" && pwd)
cd "${script_dir}"

replace() {
  prefix="$(dirname "$1")/"
  sed -E -i.bak "s#(\[[^]]*\])\(([^)]*)\)#\1(${prefix}\2)#g" "$1" && rm "$1.bak"
  sed -E -i.bak "s#/[^/]*/\.\./#/#g" "$1" && rm "$1.bak"
}

find src/md/reference -name '*.md' \
  | while read file; do replace "${file}"; done

