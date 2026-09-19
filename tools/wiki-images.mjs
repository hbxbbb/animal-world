import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const species = JSON.parse(readFileSync(join(root, "tools", "new-species.json"), "utf8"));
const animalsPath = join(root, "js", "animals.js");
let source = readFileSync(animalsPath, "utf8");

const headers = {
  "User-Agent": "AnimalWorldAtlas/1.0 (https://github.com/hbxbbb/animal-world; educational)",
  Accept: "application/json"
};

function chunk(list, size) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

function filenameFromUrl(url) {
  try {
    const path = new URL(url).pathname.split("/").pop() || "";
    return decodeURIComponent(path).replace(/_/g, " ");
  } catch {
    return "";
  }
}

const map = new Map();
for (const group of chunk(species, 20)) {
  const titles = group.map((item) => item.wiki).join("|");
  const api = `https://en.wikipedia.org/w/api.php?action=query&format=json&redirects=1&prop=pageimages&piprop=original|name&pithumbsize=1400&titles=${encodeURIComponent(titles)}`;
  const ac = new AbortController();
  const timer = setTimeout(() => ac.abort(), 20000);
  try {
    const res = await fetch(api, { headers, signal: ac.signal });
    const data = await res.json();
    const pages = data.query?.pages || {};
    const normalized = new Map();
    for (const item of data.query?.redirects || []) normalized.set(item.from, item.to);
    for (const item of data.query?.normalized || []) normalized.set(item.from, item.to);
    const byTitle = new Map();
    for (const page of Object.values(pages)) {
      if (page.original?.source) byTitle.set(page.title, filenameFromUrl(page.original.source));
    }
    for (const item of group) {
      let title = item.wiki;
      title = normalized.get(title) || title;
      title = normalized.get(title) || title;
      const file = byTitle.get(title);
      if (file) map.set(item.id, file);
    }
    console.log(`batch ok ${group[0].id}..${group.at(-1).id} (${map.size} total files)`);
  } catch (error) {
    console.log(`batch fail ${group[0].id}: ${error.cause?.code || error.name}`);
  } finally {
    clearTimeout(timer);
  }
}

console.log(`Wikipedia lead images: ${map.size}/${species.length}`);
if (!map.size) process.exit(0);

for (const [id, file] of map) {
  const re = new RegExp(`(id: "${id}"[\\s\\S]*?files: \\[\\s*)`);
  if (!source.includes(`id: "${id}"`)) continue;
  if (source.includes(JSON.stringify(file))) continue;
  source = source.replace(re, `$1${JSON.stringify(file)},\n        `);
}

writeFileSync(animalsPath, source);
console.log("animals.js updated with Wikipedia lead images");
