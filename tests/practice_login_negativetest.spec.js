import { test, expect } from '@playwright/test';
import { loginpage } from '../page/loginpage';


test('Verify error message for an invalid password', async ({ page }) => {

    const login = new loginpage(page)

    await login.gotologinpage()
    await login.login('student', 'Password12345')
    await expect(page.locator('#error')).toHaveText ('Your password is invalid!') 
});


test('Verify error message for an invalid Username', async ({ page }) => {

    const login = new loginpage(page)

    await login.gotologinpage()
    await login.login('Incorrectstudent', 'Password123')
    await expect(page.locator('#error')).toHaveText ('Your username is invalid!') 
});