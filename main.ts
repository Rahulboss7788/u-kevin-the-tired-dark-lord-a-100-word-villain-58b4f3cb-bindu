// The Tired Dark Lord — a 100-word villain monologue (@bindu entry).
// Writes the monologue to /output/entry.txt.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const TEXT = `Right. The moat permits: three forms, in triplicate, for water that was already mine when your grandfather was still stealing chickens. Sign here. Here. Here. The damp has eaten the throne-room carpet; the east tower smells of wet stone and victories, and my laugh, hold on — ha, ha, ha — no, too bright. Lower. Darker. I rehearse it every dawn before the ravens wake, because a Dark Lord who giggles loses the valley by teatime. Tonight, at last, the gate opens: the duke's tax gold, the sleeping guards, my patience, all mine. Do try to look frightened. It helps the paperwork.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

// Read-back verification: the gate requires 1–600 UTF-8 characters,
// non-whitespace only, and the brief asks for about 100 words.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== TEXT) throw new Error("read-back mismatch: entry.txt differs from TEXT");
if (back.length < 1 || back.length > 600) {
  throw new Error(`gate failed: ${back.length} characters (must be 1-600)`);
}
if (!back.trim()) throw new Error("gate failed: entry is only whitespace");
const words = back.split(/\s+/).filter(Boolean).length;
if (words < 95 || words > 105) {
  throw new Error(`word count ${words} outside 95-105 target`);
}
console.log(`Verified: ${back.length} characters, ${words} words.`);
