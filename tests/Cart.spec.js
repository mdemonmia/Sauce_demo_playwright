import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../fixtures/testData';

const data= new testData();

test.describe('test cart page', ()=>{
    test.beforeEach(async({page})=>{
        const login= new LoginPage(page);
        await login.goto(data.url);
        await login.login(data.users.standard_user.username, data.users.standard_user.password);
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('product should be add to cart',async({page})=>{
        const product = new ProductPage(page)
        await product.getProductList(data.products.bikeLight);
        await product.gotoCart();
        const cart  = new CartPage(page)
        // const count=await cart.cartCount();
        // expect(count).toBe(1);
        const isExist=await cart.isproductExist(data.products.bikeLight);
        expect(isExist).toBe(true);

    })

    test('remove product from cart',async({page})=>{
        const product = new ProductPage(page)
        await product.getProductList(data.products.bikeLight);
        await product.gotoCart();
        const cart = new CartPage(page)
        await cart.removeProduct(data.products.bikeLight);
        const count=await cart.cartCount();
        expect(count).toBe(0);
    })

    test('add multiple product in the cart',async({page})=>{
        const product = new ProductPage(page);
        await product.getProductList(data.products.bikeLight, data.products.fleeceJacket);
        await product.gotoCart();
        const cart = new CartPage(page);
        const count=await cart.cartCount();
        expect(count).toBe(2);
    })

    test('continue shopping',async({page})=>{
        const product = new ProductPage(page)
        await product.getProductList(data.products.bikeLight);
        await product.gotoCart();
        const cart = new CartPage(page);
        await cart.continueShopping();
        await product.getProductList(data.products.fleeceJacket);
        await product.gotoCart();
        const count=await cart.cartCount();
        expect(count).toBe(2);
    })
})