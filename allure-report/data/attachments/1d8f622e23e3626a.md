# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Product.spec.js >> product page tests >> show product list
- Location: tests\Product.spec.js:18:5

# Error details

```
TypeError: product.goto is not a function
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { ProductPage } from '../pages/ProductPage';
  4  | import { testData } from '../fixtures/testData';
  5  | 
  6  | const data=new testData();
  7  | test.describe('product page tests', ()=>{
  8  |     test.beforeEach(async({page})=>{
  9  |         const product=new ProductPage(page);
> 10 |         await product.goto(data.url);
     |                       ^ TypeError: product.goto is not a function
  11 |         await product.login(data.users.standard_user.username, data.users.standard_user.password);
  12 |     })
  13 | 
  14 |     test.afterEach(async({page})=>{
  15 |         await page.close();
  16 |     })
  17 | 
  18 |     test('show product list',async({page})=>{
  19 |         const product = new ProductPage(page);
  20 |         const count=await product.productCount();
  21 |         expect(count).toBe(6);
  22 | 
  23 |     })
  24 | })
```