import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { testData } from '../fixtures/testData';

const data = new testData();
test.describe('checkout page test', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.login(data.users.standard_user.username, data.users.standard_user.password);

        const product = new ProductPage(page)
        await product.getProductList(data.products.bikeLight, data.products.fleeceJacket);
        await product.gotoCart();
        const cart = new CartPage(page);
        await cart.isproductExist(data.products.bikeLight);
        const count=await cart.cartCount();
        expect(count).toBe(2);
        await cart.click_checkout();
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('enter invalid data for first name and click to continue button',async({page})=>{
        const checkout = new CheckoutPage(page);
        await checkout.checkoutForm(
            data.checkoutinfo.missingFirstName.firstName,
            data.checkoutinfo.missingLastName.lastName,
            data.checkoutinfo.missingPostalCode.postalCode
        )
        await checkout.clickContinueBtn();
        const errormessage= await checkout.getErrorMsg();
        expect(await errormessage).toBeVisible();
        console.log(await errormessage.textContent());

    })

    test('enter invalid data for last name and click to continue button',async({page})=>{
        const checkout = new CheckoutPage(page);
        await checkout.checkoutForm(
            data.checkoutinfo.missingLastName.firstName,
            data.checkoutinfo.missingLastName.lastName,
            data.checkoutinfo.missingPostalCode.postalCode
        )

        await checkout.clickContinueBtn();
        const errormessage1= await checkout.getErrorMsg();
        expect(await errormessage1).toBeVisible();
        console.log(await errormessage1.textContent());
    })

    test('enter invalid data for postal code and click to continue button', async({page})=>{
        const checkout = new CheckoutPage(page);
        await checkout.checkoutForm(
            data.checkoutinfo.missingPostalCode.firstName,
            data.checkoutinfo.missingPostalCode.lastName,
            data.checkoutinfo.missingPostalCode.postalCode
        )
        await checkout.clickContinueBtn();
        const errormessage2= await checkout.getErrorMsg();
        expect(await errormessage2).toBeVisible();
        console.log(await errormessage2.textContent());
    })

    test('enter invalid data for all field and click to continue button',async({page})=>{
        const checkout = new CheckoutPage(page);
        await checkout.checkoutForm(
            data.checkoutinfo.blankAllField.firstName,
            data.checkoutinfo.blankAllField.lastName,
            data.checkoutinfo.blankAllField.postalCode
        )
        await checkout.clickContinueBtn();
        const errormessage3= await checkout.getErrorMsg();
        expect(await errormessage3).toBeVisible();
        console.log(await errormessage3.textContent());
    })

    test('enter valid field and click to continue button', async({page})=>{
        const checkout = new CheckoutPage(page);
        await checkout.checkoutForm(
            data.checkoutinfo.valid.firstName,
            data.checkoutinfo.valid.lastName,
            data.checkoutinfo.valid.postalCode
        )
        await checkout.clickContinueBtn();
        const ordersummary=await checkout.getOrderTotal();
        expect(await ordersummary).toBeVisible();
        console.log(await ordersummary.textContent());
        await checkout.clickFinishBtn();
        const successMsg= await checkout.getSuccessHeader();
        expect(await successMsg).toBeVisible();
        console.log(await successMsg.textContent());
    })

})