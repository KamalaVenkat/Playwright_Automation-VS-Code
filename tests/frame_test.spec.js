import { test, expect } from '@playwright/test';
test('frame',async({page}) => {
await page.goto('https://www.flipkart.com/')
//await page.locator('/html/body/div[5]/div/div/div/div[2]/div/form/div[1]/input').fill('1234567890')
//await page.locator('xkp9Hl ZvCKfk').click();
//await expect(page.locator('xpath=/html/body/div[5]/div/div/div/div[2]/div/form')).toBeVisible();
//await page.locator('xpath=/html/body/div[5]/div/div/div/div[2]/div/form').fill('9884477012');
//await page.getByRole('textbox').last().fill('9884477012');
//await page.locator('//form//input[@type="text"]').fill('9884477012');
await page.locator('(//form//input[@type="text"])[last()]').fill('9884477012');
})