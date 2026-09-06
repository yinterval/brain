#!/usr/bin/env node
// Capture into inbox/. Nothing is processed here - just landed, fast.
// Usage:
//   brain add https://youtube.com/watch?v=...
//   brain add ~/Downloads/book.pdf
//   brain add "note to self: ..."
//   brain add ~/Desktop/screenshot.png
//   (any of the above) --note "why this matters"

const fs = require("fs");
const path = require("path");
const os = require("os");

function expandHome(p) {
  if (p.startsWith("~")) return path.join(os.homedir(), p.slice(1));
  return p;
}

function slugify(s, maxLen) {
  const slug = s
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, maxLen);
  return slug || "item";
}

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function uniquePath(dir, base, ext) {
  let candidate = path.join(dir, `${base}${ext}`);
  let n = 2;
  while (fs.existsSync(candidate)) {
    candidate = path.join(dir, `${base}-${n}${ext}`);
    n++;
  }
  return candidate;
}

function isUrl(s) {
  return /^https?:\/\//i.test(s);
}

function main() {
  const rawArgs = process.argv.slice(2);

  let note = null;
  const noteIdx = rawArgs.indexOf("--note");
  if (noteIdx !== -1) {
    note = rawArgs[noteIdx + 1] ?? null;
    rawArgs.splice(noteIdx, 2);
  }

  if (rawArgs.length === 0) {
    console.error('usage: brain add <url | file path | "note text"> [--note "..."]');
    process.exit(1);
  }

  const input = rawArgs.join(" ").trim();
  const repoRoot = path.resolve(__dirname, "..");
  const inboxDir = path.join(repoRoot, "inbox");
  fs.mkdirSync(inboxDir, { recursive: true });

  const date = todayStr();
  const expandedPath = expandHome(input);

  let ext, slug, writeContent, sourceField;

  if (isUrl(input)) {
    ext = ".url";
    let slugSource = input;
    const yt = input.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{6,})/);
    if (yt) slugSource = `youtube-${yt[1]}`;
    slug = slugify(slugSource, 40);
    writeContent = input + "\n";
    sourceField = input;
  } else if (fs.existsSync(expandedPath) && fs.statSync(expandedPath).isFile()) {
    const original = path.basename(expandedPath);
    ext = path.extname(original);
    slug = slugify(path.basename(original, ext), 40);
    sourceField = expandedPath;
  } else {
    ext = ".txt";
    slug = slugify(input.split(/\s+/).slice(0, 6).join(" "), 40);
    writeContent = input + "\n";
    sourceField = "note";
  }

  const destPath = uniquePath(inboxDir, `${date}-${slug}`, ext);

  if (writeContent !== undefined) {
    fs.writeFileSync(destPath, writeContent, "utf8");
  } else {
    fs.copyFileSync(expandedPath, destPath);
  }

  const sidecar = {
    source: sourceField,
    captured: new Date().toISOString(),
    note,
  };
  fs.writeFileSync(destPath + ".json", JSON.stringify(sidecar, null, 2) + "\n", "utf8");

  console.log(`captured -> inbox/${path.basename(destPath)}`);
}

main();
