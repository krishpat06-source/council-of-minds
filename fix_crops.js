import { Jimp } from 'jimp';

async function fixCrops() {
  console.log("Fixing portrait crops...");

  const repoImg = await Jimp.read('src/assets/eternal_repository.png'); // 977x771

  async function crop(img, x, y, w, h, outPath) {
    const c = img.clone();
    c.crop({ x, y, w, h });
    await c.write(outPath);
    console.log(`✓ ${outPath} (${x},${y} ${w}x${h})`);
  }

  // Fix Einstein - need to shift left to avoid the right edge name text
  // Einstein card in repo: upper-right region of second row
  // The image is 977px wide, 771px tall
  // Da Vinci row 2 starts at y~585, Einstein at x~605
  await crop(repoImg, 606, 584, 58, 72, 'src/assets/davinci.png');    // Da Vinci row2 portrait 
  await crop(repoImg, 336, 584, 58, 72, 'src/assets/einstein.png');   // Einstein is actually bottom-left

  console.log("Done.");
}

fixCrops().catch(console.error);
