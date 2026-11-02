/**
 * Optimize public/assets images for GitHub README display.
 * Resizes to max 1200px wide and compresses JPEGs to quality 80.
 * Saves optimized copies back in-place (overwrites originals after backup).
 */

import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ASSETS_DIR = path.join(__dirname, '..', 'public', 'assets');
const MAX_WIDTH = 1200;
const QUALITY = 78;

async function optimize() {
  const files = fs.readdirSync(ASSETS_DIR).filter(f => /\.(jpg|jpeg|png)$/i.test(f));
  console.log(`Found ${files.length} images to optimize...\n`);

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const before = fs.statSync(filePath).size;

    const tmpPath = filePath + '.tmp';
    await sharp(filePath)
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(tmpPath);

    fs.renameSync(tmpPath, filePath);
    const after = fs.statSync(filePath).size;
    const pct = Math.round((1 - after / before) * 100);
    console.log(`  ${file.padEnd(35)} ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB  (−${pct}%)`);
  }

  console.log('\n✅ All images optimized!');
}

optimize().catch(console.error);
