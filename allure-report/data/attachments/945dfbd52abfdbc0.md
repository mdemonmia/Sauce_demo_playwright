# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> login tests >> test locked out user
- Location: tests\Login.spec.js:24:10

# Error details

```
TypeError: Cannot read properties of undefined (reading 'textContent')
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { testData } from '../fixtures/testData';
  4  | 
  5  | const data = new testData();
  6  | test.describe('login tests', ()=>{
  7  |     test.beforeEach(async({page})=>{
  8  |         const login=new LoginPage(page);
  9  |         await login.goto(data.url)
  10 |     })
  11 | 
  12 |     test.afterEach(async({page})=>{
  13 |         await page.close();
  14 |     })
  15 | 
  16 |     test('valid login test',async({page})=>{
  17 |         const login=new LoginPage(page);
  18 |         await login.login(data.users.standard_user.username,
  19 |             data.users.standard_user.password);
  20 |         expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  21 |         await page.waitForTimeout(3000)
  22 |     })
  23 | 
  24 |     test.only('test locked out user',async({page})=>{
  25 |         const login=new LoginPage(page);
  26 |         await login.login(data.users.locked_user.username, data.users.locked_user.password);
  27 |         const lockedouterror=await expect(page.locator(login.errormsg)).toBeVisible();
> 28 |         console.log(await lockedouterror.textContent());
     |                                          ^ TypeError: Cannot read properties of undefined (reading 'textContent')
  29 | 
  30 |     })
  31 | })
  32 | 
```