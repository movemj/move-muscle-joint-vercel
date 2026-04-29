import { execSync } from 'child_process';

console.log("[v0] Starting build process...");

try {
  const output = execSync('pnpm run build', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf-8',
    stdio: 'pipe'
  });
  
  console.log("[v0] Build output:");
  console.log(output);
  console.log("[v0] Build completed successfully");
} catch (error) {
  console.log("[v0] Build failed with error:");
  console.log(error.stdout);
  console.log(error.stderr);
  console.log(error.message);
}
