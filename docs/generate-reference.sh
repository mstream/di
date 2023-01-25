#!/usr/bin/env sh

set -e
script_dir=$(CDPATH="" cd -- "$(dirname -- "$0")" && pwd)
cd "${script_dir}"

out_dir=src/md/reference

prepend() {
  echo "$(echo -e "$2"; cat "$1")" > "$1"
}

rm -rf "${out_dir}"
mkdir -p "${out_dir}"

npx --no typedoc -- \
  --disableSources \
  --excludePrivate \
  --githubPages true \
  --out "${out_dir}" \
  --readme none \
  ../src/ts/di.ts  

prepend \
  "${out_dir}/README.md" \
  "---\nlayout: page\ntitle: Reference\npermalink: /reference/\n---\n"

prettier --write "${out_dir}"
