import { expect, test } from '@playwright/test';

test('button and link logic', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 1440, height: 940 } });
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], {
    origin: 'http://127.0.0.1:3000'
  });

  const page = await context.newPage();
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'domcontentloaded' });

  await page.locator('a.btn-hero-main').click();
  await expect(page).toHaveURL(/#joke-zone$/);

  await page.locator('a.btn-hero-secondary').click();
  await expect(page).toHaveURL(/#api-zone$/);

  await page.locator('.nav-links a').nth(0).click();
  await expect(page).toHaveURL(/#joke-zone$/);

  await page.locator('.nav-links a').nth(1).click();
  await expect(page).toHaveURL(/#api-zone$/);

  const navGithubPromise = page.waitForEvent('popup');
  await page.locator('.nav-links a').nth(2).click();
  const navGithub = await navGithubPromise;
  expect(navGithub.url()).toContain('github.com');
  await navGithub.close();

  await page.locator('.footer-links a').nth(0).click();
  await expect(page).toHaveURL(/#joke-zone$/);

  await page.locator('.footer-links a').nth(1).click();
  await expect(page).toHaveURL(/#api-zone$/);

  const footerGithubPromise = page.waitForEvent('popup');
  await page.locator('.footer-links a').nth(2).click();
  const footerGithub = await footerGithubPromise;
  expect(footerGithub.url()).toContain('github.com');
  await footerGithub.close();

  await page.locator('.footer-links a').nth(3).click();
  await expect(page).toHaveURL(/#joke-zone$/);

  await page.locator('#joke-zone').scrollIntoViewIfNeeded();

  const waPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: /WHATSAPP|SHARE PE WHATSAPP/i }).click();
  const wa = await waPromise;
  expect(wa.url()).toMatch(/(wa\.me|whatsapp\.com)/);
  await wa.close();

  const xPromise = page.waitForEvent('popup');
  await page.getByRole('button', { name: /POST ON X|\bX\b/i }).first().click();
  const x = await xPromise;
  expect(x.url()).toContain('intent/tweet');
  await x.close();

  const jokeBefore = (await page.locator('.joke-card h2').innerText()).trim();
  await page.getByRole('button', { name: /COPY/i }).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  expect(copied.trim()).toBe(jokeBefore);

  let changed = false;
  let previous = jokeBefore;
  for (let i = 0; i < 8; i += 1) {
    await page.getByRole('button', { name: /NAYA JOKE LAO|LOADING/i }).click();
    await page.waitForTimeout(250);
    const current = (await page.locator('.joke-card h2').innerText()).trim();
    if (current !== previous) {
      changed = true;
      break;
    }
    previous = current;
  }
  expect(changed).toBeTruthy();

  await context.close();
});
