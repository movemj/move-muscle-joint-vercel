import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images');

const images = [
  'hero',
  'chiropractic',
  'myofascial',
  'shockwave',
  'rehab',
  'provider',
  'assessment',
  'lifestyle',
  'clinic',
  'handsOn',
];

async function convertImages() {
  for (const imageName of images) {
    const inputPath = path.join(inputDir, `${imageName}.png`);
    const outputPath = path.join(outputDir, `${imageName}.webp`);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  File not found: ${inputPath}`);
      continue;
    }

    try {
      const metadata = await sharp(inputPath).metadata();
      const maxDimension = Math.max(metadata.width || 0, metadata.height || 0);
      
      let resizeOptions = {};
      if (maxDimension > 1920) {
        const scale = 1920 / maxDimension;
        resizeOptions = {
          width: Math.round((metadata.width || 0) * scale),
          height: Math.round((metadata.height || 0) * scale),
          withoutEnlargement: true,
        };
      }

      await sharp(inputPath)
        .resize(resizeOptions.width, resizeOptions.height, {
          withoutEnlargement: true,
        })
        .webp({ quality: 80 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size / 1024;
      const outputSize = fs.statSync(outputPath).size / 1024;
      console.log(
        `✅ Converted ${imageName}: ${inputSize.toFixed(1)}KB → ${outputSize.toFixed(1)}KB (${(
          ((inputSize - outputSize) / inputSize) *
          100
        ).toFixed(1)}% reduction)`
      );
    } catch (error) {
      console.error(`❌ Error converting ${imageName}:`, error.message);
    }
  }
}

convertImages();
