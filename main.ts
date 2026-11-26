// Five Seconds to Explain the Glass — u-po-pu-five-seconds-to-explain-the-glass-934d9949
// The one sentence a house cat says in its own defence after knocking a glass
// off the table: territorial eviction logic, no apology, no confession.
// The angle: the cat is not sorry and never touched the glass by accident —
// the glass was a squatter in the cat's sunbeam, so the cat evicted it.
// The crash is reframed as the glass leaving loudly, which is the glass's
// fault, not the cat's. Pure cat logic: territory, rent, zero remorse.
import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const ENTRY =
  "That glass squatted in my sunbeam for three hours without paying rent, so I evicted it — the crash was just it leaving loudly.";

// Gate guard: the sealed scorer only accepts UTF-8 text of 1 to 200
// characters, not only white space. Refuse to write anything invalid.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} characters, gate needs 1-200`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

let outPath = process.argv[2] ? process.argv[2] : "/output/entry.txt";
// Accept a directory as argv[2] and write entry.txt inside it.
if (existsSync(outPath) && statSync(outPath).isDirectory()) {
  outPath = join(outPath, "entry.txt");
}
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`wrote ${outPath} (${ENTRY.length} characters)`);
