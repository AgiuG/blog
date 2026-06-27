import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, '../../public/projects');

const sites = [
  { url: 'https://cardex-web-cyan.vercel.app/', filename: 'cardex.png' },
  { url: 'https://cimut.vercel.app/', filename: 'cimut.png' },
];

const browser = await puppeteer.launch({ headless: true });

for (const site of sites) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  const outPath = path.join(outputDir, site.filename);
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 720 } });
  console.log(`Saved: ${outPath}`);
  await page.close();
}

await browser.close();
