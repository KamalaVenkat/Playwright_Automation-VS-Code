import {test,expect} from '@playwright/test'
test('selectors',async({page}) => {

await page.goto('https://www.gmail.com')
await page.pause()
await page.click('id=identifierId')
await page.locator('id=identifierId').fill('kamalavenkat')
});