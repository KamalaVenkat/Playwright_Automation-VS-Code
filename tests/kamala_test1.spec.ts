import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('html').click();
  await page.goto('https://www.google.com');
  await page.getByRole('link', { name: 'Sign in12' }).click();
  await page.locator('div').nth(2).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Open Google Account Help' }).click();
  const page1 = await page1Promise;
  await page1.locator('#page-width-container').click();
  await page1.goto('https://support.google.com/accounts?hl=en&visit_id=639223362800826295-2631587630&rd=2&p=account_iph#topic=3382296');
});