import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const species = JSON.parse(readFileSync(join(root, "tools", "new-species.json"), "utf8"));
const animalsPath = join(root, "js", "animals.js");
let source = readFileSync(animalsPath, "utf8");

if (species.length !== 100) {
  throw new Error(`Expected 100 new species, got ${species.length}`);
}

const ids = new Set();
for (const item of species) {
  if (ids.has(item.id)) throw new Error(`Duplicate new id: ${item.id}`);
  ids.add(item.id);
  for (const key of ["name", "latin", "region", "habitat", "diet", "status", "statusLevel", "summary", "story", "files", "facts"]) {
    if (!item[key]) throw new Error(`Missing ${key} on ${item.id}`);
  }
}

const existingIds = [...source.matchAll(/id: "([^"]+)"/g)].map((m) => m[1]);
for (const id of ids) {
  if (existingIds.includes(id)) throw new Error(`Id already exists: ${id}`);
}

const block = species
  .map((item) => {
    const files = item.files.map((file) => `        ${JSON.stringify(file)}`).join(",\n");
    const facts = item.facts.map((fact) => `        ${JSON.stringify(fact)}`).join(",\n");
    return `    {
      id: ${JSON.stringify(item.id)},
      name: ${JSON.stringify(item.name)},
      latin: ${JSON.stringify(item.latin)},
      region: ${JSON.stringify(item.region)},
      habitat: ${JSON.stringify(item.habitat)},
      diet: ${JSON.stringify(item.diet)},
      status: ${JSON.stringify(item.status)},
      statusLevel: ${JSON.stringify(item.statusLevel)},
      files: [
${files}
      ],
      summary: ${JSON.stringify(item.summary)},
      story: ${JSON.stringify(item.story)},
      facts: [
${facts}
      ]
    }`;
  })
  .join(",\n");

const marker = '      facts: ["翼展可超 3 米", "寿命可超过 50 年", "成对长期相伴"]';
const idx = source.lastIndexOf(marker);
if (idx === -1) {
  throw new Error("Could not find insertion point in animals.js");
}
const closeIdx = source.indexOf("];", idx);
if (closeIdx === -1) {
  throw new Error("Could not find end of raw array");
}
const before = source.slice(0, closeIdx).replace(/\s*\}\s*$/, "\n    },\n");
source = `${before}${block}\n  ${source.slice(closeIdx)}`;

writeFileSync(animalsPath, source);
console.log(`Added ${species.length} animals. Total ids: ${(source.match(/id: "/g) || []).length}`);
