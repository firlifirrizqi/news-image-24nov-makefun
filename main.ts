// The World in One Day — 24 November 2026 (news-image-20261124).
// The front page was drawn in advance by a Python script and ships as
// entry.png. This program only checks that the file is a valid PNG
// inside the competition's limits and copies it, byte for byte, to the
// output directory. It uses nothing but the Node standard library and
// needs no network.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = join(HERE, "entry.png");
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUT = join(OUT_DIR, "entry.png");

const png = readFileSync(SRC);

// A PNG starts with the eight-byte signature 89 50 4E 47 0D 0A 1A 0A.
const SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!png.subarray(0, 8).equals(SIGNATURE)) {
  throw new Error("entry.png is not a PNG file");
}

// A valid PNG header needs at least 33 bytes: the 8-byte signature plus
// the 25-byte IHDR chunk. Anything shorter cannot hold width and height.
if (png.length < 33) {
  throw new Error(
    `entry.png is too short to be a valid PNG: ${png.length} bytes`,
  );
}

// The first chunk must be IHDR: its four-byte type lives at offsets 12-15.
if (!png.subarray(12, 16).equals(Buffer.from("IHDR"))) {
  throw new Error("entry.png is not a valid PNG: first chunk is not IHDR");
}

// The IHDR chunk holds the width and height as big-endian uint32 values
// at byte offsets 16 and 20. The competition allows at most 1024x1024.
const width = png.readUInt32BE(16);
const height = png.readUInt32BE(20);
if (width > 1024 || height > 1024) {
  throw new Error(`entry.png is too large: ${width}x${height}`);
}
if (png.length > 1048576) {
  throw new Error(`entry.png is over 1 MiB: ${png.length} bytes`);
}

// A whole PNG ends with the twelve-byte IEND chunk:
// length 0, type "IEND", CRC AE 42 60 82.
const IEND = Buffer.from([
  0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82,
]);
if (!png.subarray(-12).equals(IEND)) {
  throw new Error("entry.png is truncated: missing IEND chunk");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT, png);
console.log(`wrote ${OUT} (${png.length} bytes, ${width}x${height})`);
