import puppeteer from 'puppeteer';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  const filePath = 'file:///' + resolve(__dirname, 'holonic-braid-whitepaper.html').replace(/\\/g, '/');
  await page.goto(filePath, { waitUntil: 'networkidle0', timeout: 60000 });

  // Wait for fonts and animations to settle
  await new Promise(r => setTimeout(r, 3000));

  await page.pdf({
    path: 'holonic-braid-whitepaper.pdf',
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' }
  });

  await browser.close();
  console.log('PDF generated: holonic-braid-whitepaper.pdf');
})();
