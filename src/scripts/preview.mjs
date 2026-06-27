import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 900 });
await page.goto('http://localhost:3000/projects', { waitUntil: 'networkidle2' });
await new Promise(r => setTimeout(r, 4000));
await page.screenshot({ path: 'C:/Users/guidu/AppData/Local/Temp/projects-preview.png', fullPage: true });
console.log('done');
await browser.close();
