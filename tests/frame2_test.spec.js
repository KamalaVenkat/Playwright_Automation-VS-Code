import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.redbus.in/', {
    waitUntil: 'domcontentloaded'});
  await page.getByRole('button', { name: 'Account', exact: true }).click();
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.locator('input[type="tel"]').click();
  await page.locator('input[type="tel"]').fill('8546213789');
});