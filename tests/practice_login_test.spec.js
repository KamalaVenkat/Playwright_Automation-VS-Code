import {test,expect}from '@playwright/test';
import { loginpage } from '../page/loginpage';


test('test',async({page}) => {

    const login = new loginpage(page)

    await login.gotologinpage()
    await login.login('student','Password123')
});