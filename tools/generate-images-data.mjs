import { execSync } from "node:child_process";
import fs from "node:fs";

const REPO_OWNER = "StaticQuasar931";
const REPO_NAME = "Images";
const BRANCH = "main";
const BASE_CDN = `https://cdn.jsdelivr.net/gh/${REPO_OWNER}/${REPO_NAME}@${BRANCH}/`;

const IMAGE_EXTS = new Set(["png", "jpg", "jpeg", "webp", "gif", "svg", "avif", "ico"]);
const SPECIAL_NO_EXT = new Set([
  "Follow-us--IG",
  "Google Sign in Transparent Image"
]);

const IGNORE_FILES = new Set([
  "index.html",
  "images-data.js"
]);

function safeExec(cmd) {
  try {
    return execSync(cmd, { stdio: ["ignore", "pipe", "ignore"] }).toString("utf8").trim();
  } catch {
    return "";
  }
}

function listRepoFiles() {
  const out = safeExec(`git ls-files`);
  if (!out) return [];
  return out.split("\n").map(s => s.trim()).filter(Boolean);
}

function isImageFile(name) {
  if (IGNORE_FILES.has(name)) return false;
  if (SPECIAL_NO_EXT.has(name)) return true;

  const lower = name.toLowerCase();
  const dot = lower.lastIndexOf(".");
  if (dot === -1) return false;
  const ext = lower.slice(dot + 1);
  return IMAGE_EXTS.has(ext);
}

function getLastCommitISO(file) {
  // ISO 8601 like 2026-01-10
  const d = safeExec(`git log -1 --format=%cs -- "${file}"`);
  return d || "";
}

function stripExt(file) {
  const dot = file.lastIndexOf(".");
  if (dot === -1) return file;
  return file.slice(0, dot);
}

function prettyLabel(file) {
  // Keep special names as-is
  if (SPECIAL_NO_EXT.has(file)) return file;

  let base = stripExt(file);

  // convert separators to spaces
  base = base.replace(/[_]+/g, " ");
  base = base.replace(/[-]+/g, " ");
  base = base.replace(/\s+/g, " ").trim();

  return base;
}

function inferType(file, label) {
  const s = (file + " " + label).toLowerCase();

  if (s.includes("favicon")) return "icon";
  if (s === "icon.png" || s.includes(" icon")) return "icon";
  if (s.includes("logo")) return "logo";
  if (s.includes("banner") || s.includes("616x353") || s.includes("16x9") || s.includes("cover")) return "art";
  if (s.includes("background")) return "art";
  if (s.includes("qrcode") || s.includes("qr")) return "seo";
  if (s.includes("googleform") || s.includes("instagram") || s.includes("discord") || s.includes("follow")) return "seo";
  if (s.includes("autosave") || s.includes("signout") || s.includes("logout") || s.includes("save") || s.includes("document")) return "ui";
  return "game";
}

function inferTags(file, label, type) {
  const tags = new Set();
  const s = (file + " " + label).toLowerCase();

  tags.add(type);

  // quick common tags
  if (s.includes("transparent")) tags.add("transparent");
  if (s.includes("removebg")) tags.add("fake transparent");
  if (s.includes("favicon")) tags.add("favicon");
  if (s.includes("icon")) tags.add("icon");
  if (s.includes("logo")) tags.add("logo");
  if (s.includes("banner")) tags.add("banner");
  if (s.includes("cover")) tags.add("cover");
  if (s.includes("background")) tags.add("background");
  if (s.includes("square")) tags.add("square");
  if (s.includes("tall")) tags.add("tall");

  // game keywords you likely search
  const gameHints = [
    "minecraft", "granny", "ultrakill", "fortzone", "sandbox", "slope", "isaac", "retro bowl",
    "smashkarts", "clash royale", "crossy road", "drift hunters", "escape road", "basketbros",
    "bloodmoney", "ragdoll", "stickman", "stumble"
  ];
  for (const g of gameHints) {
    if (s.includes(g)) tags.add(g);
  }

  // SEO hints
  if (type === "seo") tags.add("seo");
  if (s.includes("google")) tags.add("google");
  if (s.includes("form")) tags.add("google form");
  if (s.includes("instagram")) tags.add("instagram");
  if (s.includes("discord")) tags.add("discord");

  return Array.from(tags);
}

function makeAlias(file) {
  // Optional alias: lowercase, safe, no extension
  const base = stripExt(file).toLowerCase();
  return base
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseDateToNumber(dateStr) {
  // "YYYY-MM-DD" -> number for sorting
  if (!dateStr) return 0;
  return Number(dateStr.replaceAll("-", ""));
}

function build() {
  const all = listRepoFiles();
  const imgs = all.filter(isImageFile);

  const items = imgs.map(file => {
    const label = prettyLabel(file);
    const type = inferType(file, label);
    const date = getLastCommitISO(file); // real date from git
    const tags = inferTags(file, label, type);

    // Only include alias if it’s useful
    const alias = makeAlias(file);

    return {
      file,
      label,
      type,
      date,
      tags,
      alias
    };
  });

  // newest first
  items.sort((a, b) => parseDateToNumber(b.date) - parseDateToNumber(a.date));

  const generatedAt = new Date().toISOString();

  const out =
`// AUTO-GENERATED FILE. DO NOT EDIT BY HAND.
// Generated: ${generatedAt}
// Repo: ${REPO_OWNER}/${REPO_NAME}@${BRANCH}

const baseCdn = ${JSON.stringify(BASE_CDN)};

const images = ${JSON.stringify(items, null, 2)};

// expose globals for index.html
window.baseCdn = baseCdn;
window.images = images;
`;

  fs.writeFileSync("images-data.js", out, "utf8");
  console.log(`Wrote images-data.js with ${items.length} items.`);
}

build();
