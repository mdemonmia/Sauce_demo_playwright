import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { testData } from '../fixtures/testData';

const data = new testData();
test.describe('login tests', ()=>{
    test.beforeEach(async({page})=>{
        const login=new LoginPage(page);
        await login.goto(data.url)
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('valid login test',async({page})=>{
        const login=new LoginPage(page);
        await login.login(data.users.standard_user.username,
            data.users.standard_user.password);
        expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await page.waitForTimeout(3000)
    })

    test('test locked out user',async({page})=>{
        const login=new LoginPage(page);
        await login.login(data.users.locked_user.username, data.users.locked_user.password);
        const lockedouterror=page.locator(login.errormsg);
        await expect(lockedouterror).toBeVisible();
        console.log(await lockedouterror.textContent());

    })

    test('problem user',async({page})=>{
        const login=new LoginPage(page)
        await login.login(data.users.problem_user.username,data.users.problem_user.password);
        console.log("this is problem user. you cannot move forward.")
    })

    test('test invalid user',async({page})=>{
        const login=new LoginPage(page)
        await login.login(data.users.invalid_user.username,data.users.invalid_user.password);
        const invalidUser=await page.locator(login.errormsg);
        await expect(invalidUser).toBeVisible();
        console.log(await invalidUser.textContent());
    })

    test('test blank username',async({page})=>{
        const login=new LoginPage(page);
        await login.login(data.users.blank_username.username, data.users.blank_username.password);
        const blankUsername=await page.locator(login.errormsg);
        await expect(blankUsername).toBeVisible();
        console.log(await blankUsername.textContent());
    })

    test('test blank password',async({page})=>{
        const login=new LoginPage(page);
        await login.login(data.users.blank_password.username, data.users.blank_password.password);
        const blankPassword=await page.locator(login.errormsg);
        await expect(blankPassword).toBeVisible();
        console.log(await blankPassword.textContent())
    })

    test('Null username password test', async({page})=>{
        const login=new LoginPage(page);
        await login.login(data.users.null_user_pass.username, data.users.null_user_pass.password);
        const nullUserPass=page.locator(login.errormsg);
        await expect(nullUserPass).toBeVisible();
        console.log(await nullUserPass.textContent());
    })

})
