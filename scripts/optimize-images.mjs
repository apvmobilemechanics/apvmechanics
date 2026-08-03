import sharp from 'sharp';
import { readdir, stat, readFile, writeFile } from 'fs/promises';
import { join, extname } from 'path';

const BASE = 'public/assets/images';
const MAX_WIDTH = 1200;
const QUALITY = 72;

async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(full));
    else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

async function optimize() {
  const files = await walk(BASE);
  let saved = 0;
  let count = 0;
  for (const f of files) {
    const before = (await stat(f)).size;
    if (before < 100_000) continue;

    const ext = extname(f).toLowerCase();
    try {
      // Read into buffer first to avoid file lock issues
      const inputBuf = await readFile(f);
      let pipeline = sharp(inputBuf).resize({ width: MAX_WIDTH, withoutEnlargement: true });
      
      if (ext === '.png') {
        pipeline = pipeline.png({ quality: QUALITY, compressionLevel: 9 });
      } else if (ext === '.webp') {
        pipeline = pipeline.webp({ quality: QUALITY });
      } else {
        pipeline = pipeline.jpeg({ quality: QUALITY, mozjpeg: true });
      }

      const buf = await pipeline.toBuffer();
      const after = buf.length;

      if (after < before) {
        await writeFile(f, buf);
        saved += before - after;
        count++;
        console.log(`✅ ${f} — ${Math.round(before/1024)}KB → ${Math.round(after/1024)}KB (saved ${Math.round((before-after)/1024)}KB)`);
      } else {
        console.log(`⏭️ ${f} — already optimal`);
      }
    } catch (e) {
      console.error(`❌ ${f} — ${e.message}`);
    }
  }
  console.log(`\n🎯 Total: ${count} files, saved ${Math.round(saved/1024)}KB (${(saved/1024/1024).toFixed(1)}MB)`);
}

optimize();
