# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> login tests >> valid login test
- Location: tests\Login.spec.js:16:9

# Error details

```
ReferenceError: newLoginPage is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | const { LoginPage }    = require('../pages/LoginPage');
  3  | import { testData } from '../fixures/testData';
  4  | 
  5  | const data = new testData();
  6  | test.describe('login tests', ()=>{
  7  |     test.beforeEach(async({page})=>{
  8  |         const login=new LoginPage(page);
  9  |         await login.goto('https://www.saucedemo.com/')
  10 |     })
  11 | 
  12 |     test.afterEach(async({page})=>{
  13 |         await page.close();
  14 |     })
  15 | 
  16 |     test('valid login test',async({page})=>{
> 17 |         const login=newLoginPage(page);
     |                     ^ ReferenceError: newLoginPage is not defined
  18 |         await login.login('data.users.standard_user.username','data.users.standard_user.password');
  19 |         expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  20 |     })
  21 | })
  22 | 
```