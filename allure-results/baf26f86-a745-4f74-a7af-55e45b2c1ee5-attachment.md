# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> login tests >> valid login test
- Location: tests\Login.spec.js:16:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.saucedemo.com/inventory.html"
Received: "https://www.saucedemo.com/"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    7 × unexpected value "https://www.saucedemo.com/"

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
  18 |         await login.login('data.users.standard_user.username',
  19 |             'data.users.standard_User.password');
> 20 |         expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
     |                      ^ Error: expect(page).toHaveURL(expected) failed
  21 |         await page.waitForTimeout(3000)
  22 |     })
  23 | })
  24 | 
```