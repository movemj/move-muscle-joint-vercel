import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import https from 'https';

const SOURCE_URL = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dr.%20Joseph%20Hugunin_Move%20Muscle%20%26%20Joint%20Overland%20Park%20KS-trYqvXTCheGwWW0Qv2GzzFDpnDJZ2N.png';
const OUTPUT_PATH = path.join(process.cwd(), 'public/images/provider.webp');
const MAX_DIMENSION = 1920;
const QUALITY = 80;

async function downloadImage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  console.log('Downloading new provider image...');
  const imageBuffer = await downloadImage(SOURCE_URL);
  console.log(`Downloaded: ${(imageBuffer.length / 1024).toFixed(1)}KB`);

  // Get original dimensions
  const metadata = await sharp(imageBuffer).metadata();
  console.log(`Original dimensions: ${metadata.width}x${metadata.height}`);

  // Calculate new dimensions (max 1920px on longest edge)
  let width, height;
  if (metadata.width > metadata.height) {
    width = Math.min(metadata.width, MAX_DIMENSION);
    height = null;
  } else {
    height = Math.min(metadata.height, MAX_DIMENSION);
    width = null;
  }

  // Convert and optimize
  const oldSize = fs.existsSync(OUTPUT_PATH) ? fs.statSync(OUTPUT_PATH).size : 0;
  
  await sharp(imageBuffer)
    .resize(width, height, { withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(OUTPUT_PATH);

  const newSize = fs.statSync(OUTPUT_PATH).size;
  const newMeta = await sharp(OUTPUT_PATH).metadata();
  
  console.log(`New dimensions: ${newMeta.width}x${newMeta.height}`);
  console.log(`Old file size: ${(oldSize / 1024).toFixed(1)}KB`);
  console.log(`New file size: ${(newSize / 1024).toFixed(1)}KB`);
  console.log('Provider image replaced successfully!');
}

main().catch(console.error);
