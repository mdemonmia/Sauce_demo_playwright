# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Cart.spec.js >> test cart page >> add multiple product in the cart
- Location: tests\Cart.spec.js:42:10

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: 1
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
  13 |         await login.login(data.users.standard_user.username, data.users.standard_user.password);
  14 |     })
  15 | 
  16 |     test.afterEach(async({page})=>{
  17 |         await page.close();
  18 |     })
  19 | 
  20 |     test('product should be add to cart',async({page})=>{
  21 |         const product = new ProductPage(page)
  22 |         await product.getProductList(data.products.bikeLight);
  23 |         await product.gotoCart();
  24 |         const cart  = new CartPage(page)
  25 |         // const count=await cart.cartCount();
  26 |         // expect(count).toBe(1);
  27 |         const isExist=await cart.isproductExist(data.products.bikeLight);
  28 |         expect(isExist).toBe(true);
  29 | 
  30 |     })
  31 | 
  32 |     test('remove product from cart',async({page})=>{
  33 |         const product = new ProductPage(page)
  34 |         await product.getProductList(data.products.bikeLight);
  35 |         await product.gotoCart();
  36 |         const cart = new CartPage(page)
  37 |         await cart.removeProduct(data.products.bikeLight);
  38 |         const count=await cart.cartCount();
  39 |         expect(count).toBe(0);
  40 |     })
  41 | 
  42 |     test.only('add multiple product in the cart',async({page})=>{
  43 |         const product = new ProductPage(page);
  44 |         await product.getProductList(data.products.bikeLight, data.products.fleeceJacket);
  45 |         await product.gotoCart();
  46 |         const cart = new CartPage(page);
  47 |         const count=await cart.cartCount();
> 48 |         expect(count).toBe(2);
     |                       ^ Error: expect(received).toBe(expected) // Object.is equality
  49 |     })
  50 | })
```