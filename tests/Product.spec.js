import { test,expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductPage } from '../pages/ProductPage';
import { testData } from '../fixtures/testData';

const data=new testData();
test.describe('product page tests', ()=>{
    test.beforeEach(async({page})=>{
        const login = new LoginPage(page);
        await login.goto(data.url);
        await login.login(data.users.standard_user.username, data.users.standard_user.password);
    })

    test.afterEach(async({page})=>{
        await page.close();
    })

    test('show product list',async({page})=>{
        const product = new ProductPage(page);
        const count=await product.productCount();
        expect(count).toBe(6);

    })

    test('product should be add to cart',async({page})=>{
        const product = new ProductPage(page);
        await product.getProductList(data.products.bikeLight);
        const badgecount=await product.cartbadgeCount();
        expect(badgecount).toBe(1);
    })

    test('product sort low to high',async({page})=>{
        const product = new ProductPage(page);
        await product.cartOptions(data.sortOptions.pricelohi);
        const firstproduct=await product.getFirstProductName();
        expect(firstproduct).toBe(data.products.onesie);

    })
})