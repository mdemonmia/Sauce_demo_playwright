# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> test cart page >> product should be add to cart
- Location: tests\Cart.spec.js:20:5

# Error details

```
ReferenceError: logiin is not defined
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { ProductPage } from '../pages/ProductPage';
  4  | import { CartPage } from '../pages/CartPage';
  5  | import { testData } from '../fixtures/testData';
  6  | 
  7  | const data= new testData();
  8  | 
  9  | test.describe('test cart page', ()=>{
  10 |     test.beforeEach(async({page})=>{
  11 |         const login= new LoginPage(page);
  12 |         await login.goto(data.url);
> 13 |         await logiin.login(data.users.standard_user.username, data.users.standard_user.password);
     |         ^ ReferenceError: logiin is not defined
  14 |     })
  15 | 
  16 |     test.afterEach(async({page})=>{
  17 |         await page.close();
  18 |     })
  19 | 
  20 |     test('product should be add to cart',async({page})=>{
  21 |         const product = new ProductPage(page)
  22 |         await product.getProductList(data.products.backlight);
  23 |         await product.gotoCart();
  24 |         const cart  = new CartPage(page)
  25 |         const count=await cart.cartCount();
  26 |         expect(count).toBe(1);
  27 | 
  28 |     })
  29 | })
```