import {test,expect}from '@playwright/test'
test('selectors',async({page}) => {
await page.goto('https://practicetestautomation.com/practice-test-login/')
await page.pause()
await page.locator('#username').click()
await page.locator('#username').fill('student')
await page.locator('#password').click()
await page.locator('#password').fill('Password123')
await page.locator('#submit').click()
await expect(page.locator('text=Logged in Successfully')).toBeVisible()
await expect(page).toHaveURL('https://practicetestautomation.com/logged-in-successfully/')
await page.getByRole('link', { name: 'Log out' }).click()
await expect(page).toHaveScreenshot()
await expect(page).toHaveTitle('Test Login | Practice Test Automation')
});