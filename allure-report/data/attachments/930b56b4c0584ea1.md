# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Checkout.spec.js >> checkout page test >> enter valid field and click to continue button
- Location: tests\Checkout.spec.js:82:10

# Error details

```
TypeError: cart.cartCount(...).toBe is not a function
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
  19 |         await cart.isproductExist(data.products.bikeLight);
> 20 |         await cart.cartCount().toBe(2);
     |                                ^ TypeError: cart.cartCount(...).toBe is not a function
  21 |         await cart.click_checkout();
  22 |     })
  23 | 
  24 |     test.afterEach(async({page})=>{
  25 |         await page.close();
  26 |     })
  27 | 
  28 |     test('enter invalid data for first name and click to continue button',async({page})=>{
  29 |         const checkout = new CheckoutPage(page);
  30 |         await checkout.checkoutForm(
  31 |             data.checkoutinfo.missingFirstName.firstName,
  32 |             data.checkoutinfo.missingLastName.lastName,
  33 |             data.checkoutinfo.missingPostalCode.postalCode
  34 |         )
  35 |         await checkout.clickContinueBtn();
  36 |         const errormessage= await checkout.getErrorMsg();
  37 |         expect(await errormessage).toBeVisible();
  38 |         console.log(await errormessage.textContent());
  39 | 
  40 |     })
  41 | 
  42 |     test('enter invalid data for last name and click to continue button',async({page})=>{
  43 |         const checkout = new CheckoutPage(page);
  44 |         await checkout.checkoutForm(
  45 |             data.checkoutinfo.missingLastName.firstName,
  46 |             data.checkoutinfo.missingLastName.lastName,
  47 |             data.checkoutinfo.missingPostalCode.postalCode
  48 |         )
  49 | 
  50 |         await checkout.clickContinueBtn();
  51 |         const errormessage1= await checkout.getErrorMsg();
  52 |         expect(await errormessage1).toBeVisible();
  53 |         console.log(await errormessage1.textContent());
  54 |     })
  55 | 
  56 |     test('enter invalid data for postal code and click to continue button', async({page})=>{
  57 |         const checkout = new CheckoutPage(page);
  58 |         await checkout.checkoutForm(
  59 |             data.checkoutinfo.missingPostalCode.firstName,
  60 |             data.checkoutinfo.missingPostalCode.lastName,
  61 |             data.checkoutinfo.missingPostalCode.postalCode
  62 |         )
  63 |         await checkout.clickContinueBtn();
  64 |         const errormessage2= await checkout.getErrorMsg();
  65 |         expect(await errormessage2).toBeVisible();
  66 |         console.log(await errormessage2.textContent());
  67 |     })
  68 | 
  69 |     test('enter invalid data for all field and click to continue button',async({page})=>{
  70 |         const checkout = new CheckoutPage(page);
  71 |         await checkout.checkoutForm(
  72 |             data.checkoutinfo.blankAllField.firstName,
  73 |             data.checkoutinfo.blankAllField.lastName,
  74 |             data.checkoutinfo.blankAllField.postalCode
  75 |         )
  76 |         await checkout.clickContinueBtn();
  77 |         const errormessage3= await checkout.getErrorMsg();
  78 |         expect(await errormessage3).toBeVisible();
  79 |         console.log(await errormessage3.textContent());
  80 |     })
  81 | 
  82 |     test.only('enter valid field and click to continue button', async({page})=>{
  83 |         const checkout = new CheckoutPage(page);
  84 |         await checkout.checkoutForm(
  85 |             data.checkoutinfo.valid.firstName,
  86 |             data.checkoutinfo.valid.lastName,
  87 |             data.checkoutinfo.valid.postalCode
  88 |         )
  89 |         await checkout.clickContinueBtn();
  90 |         const ordersummary=await checkout.getOrderTotal();
  91 |         expect(await ordersummary).toBeVisible();
  92 |         console.log(await ordersummary.textContent());
  93 |         await checkout.clickFinishBtn();
  94 |         const successMsg= await checkout.getSuccessHeader();
  95 |         expect(await successMsg).toBeVisible();
  96 |         console.log(await successMsg.textContent());
  97 |     })
  98 | 
  99 | })
```