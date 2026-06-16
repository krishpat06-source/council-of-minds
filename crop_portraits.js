import { Jimp } from 'jimp';
import fs from 'fs';

async function cropAll() {
  console.log("Starting precise image cropping...");

  const repoImg = await Jimp.read('src/assets/eternal_repository.png'); // 977x771
  const statusImg = await Jimp.read('src/assets/system_status.png');    // 1024x754
  const bannerImg = await Jimp.read('src/assets/logo_banner.jpg');       // 1024x571

  async function crop(img, x, y, w, h, outPath) {
    try {
      const c = img.clone();
      c.crop({ x, y, w, h });
      await c.write(outPath);
      console.log(`✓ Saved ${outPath} (${x},${y} ${w}x${h})`);
    } catch(e) {
      console.error(`✗ Failed ${outPath}:`, e.message);
    }
  }

  // --- eternal_repository.png (977x771) ---
  // Socrates portrait thumbnail: top-left of first card
  await crop(repoImg, 333, 295, 65, 80, 'src/assets/socrates.png');
  // Hypatia portrait thumbnail: top-left of second card  
  await crop(repoImg, 605, 295, 65, 80, 'src/assets/hypatia.png');
  // Da Vinci portrait thumbnail: bottom-left first card (row 2)
  await crop(repoImg, 333, 588, 65, 80, 'src/assets/davinci.png');
  // Einstein portrait thumbnail: bottom-right second card (row 2)
  await crop(repoImg, 605, 588, 65, 80, 'src/assets/einstein.png');

  // --- logo_banner.jpg (1024x571) --- use cinematic figures as avatars
  // Left philosopher (Socrates-like figure, left half): head area ~x=255,y=100
  await crop(bannerImg, 245, 95, 155, 200, 'src/assets/scholar_left.png');
  // Right armored figure (Marcus Aurelius-like): head/torso ~x=565,y=100
  await crop(bannerImg, 555, 90, 180, 210, 'src/assets/scholar_right.png');
  // Glowing center ghost (Ada Lovelace-like blue figure): x=400,y=55
  await crop(bannerImg, 395, 50, 145, 175, 'src/assets/scholar_ghost.png');
  // Babbage center-left silhouette: x=355,y=90
  await crop(bannerImg, 350, 88, 90, 120, 'src/assets/scholar_babbage.png');

  // For Tesla, Turing, Curie, Newton - use segments from banner with different scholars
  // Tesla: use the glowing ghost (center blue figure)
  await crop(bannerImg, 395, 50, 145, 175, 'src/assets/tesla.png');
  // Turing: use the left philosopher head close-up
  await crop(bannerImg, 270, 100, 130, 160, 'src/assets/turing.png');
  // Curie: use the ada lovelace ghost figure (shifted slightly)
  await crop(bannerImg, 405, 55, 130, 170, 'src/assets/curie.png');
  // Newton: use the marcus aurelius right figure head
  await crop(bannerImg, 570, 95, 165, 200, 'src/assets/newton.png');

  console.log("\nAll crops complete!");
}

cropAll().catch(console.error);
