# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.js >> checkout page test >> enter invalid data for first name and click to continue button
- Location: tests\Checkout.spec.js:26:5

# Error details

```
Error: toBeVisible can be only used with Locator object
```

# Test source

```ts
  1  | import { test,expect } from '@playwright/test';
  2  | import { LoginPage } from '../pages/LoginPage';
  3  | import { ProductPage } from '../pages/ProductPage';
  4  | import { CartPage } from '../pages/CartPage';
  5  | import { CheckoutPage } from '../pages/CheckoutPage';
  6  | import { testData } from '../fixtures/testData';
  7  | 
  8  | const data = new testData();
  9  | test.describe('checkout page test', ()=>{
  10 |     test.beforeEach(async({page})=>{
  11 |         const login = new LoginPage(page);
  12 |         await login.goto(data.url);
  13 |         await login.login(data.users.standard_user.username, data.users.standard_user.password);
  14 | 
  15 |         const product = new ProductPage(page)
  16 |         await product.getProductList(data.products.bikeLight, data.products.fleeceJacket);
  17 |         await product.gotoCart();
  18 |         const cart = new CartPage(page);
  19 |         await cart.click_checkout();
  20 |     })
  21 | 
  22 |     test.afterEach(async({page})=>{
  23 |         await page.close();
  24 |     })
  25 | 
  26 |     test('enter invalid data for first name and click to continue button',async({page})=>{
  27 |         const checkout = new CheckoutPage(page);
  28 |         await checkout.checkoutForm(
  29 |             data.checkoutinfo.missingFirstName.firstName,
  30 |             data.checkoutinfo.missingLastName.lastName,
  31 |             data.checkoutinfo.missingPostalCode.postalCode
  32 |         )
  33 |         await checkout.clickContinueBtn();
  34 |         const errormessage= await checkout.getErrorMsg();
> 35 |         await expect(errormessage).toBeVisible();
     |                                    ^ Error: toBeVisible can be only used with Locator object
  36 |         console.log('firstname error message is:', await errormessage);
  37 |     })
  38 | })
```