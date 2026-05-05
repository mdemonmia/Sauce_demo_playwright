export class ProductPage{
    constructor(page){
        this.page=page;
        this.productlist=page.locator('.inventory_item');
        this.cartDropdown=page.locator('.product_sort_container');
        this.cartbadge=page.locator('.shopping_cart_badge');
        this.cartlink=page.locator('.shopping_cart_link');
    }

    async productCount(){
        return await this.productlist.count();
    }

    async getProductList(...productName){
        const productCount=this.productlist.count();
        for (const pname of productName){
            for(let i=0;i<await productCount;i++){
                const item=await this.productlist.nth(i);
                const name=await item.locator('.inventory_item_name').textContent();
                if(name.trim()===pname){
                    await item.locator('button').click();
                    break;
                }
            }
        }
        
    }

    async cartOptions(option){
        await this.cartDropdown.selectOption(option)
    }

    async cartbadgeCount(){
        return await this.cartbadge.count();
    }

    async gotoCart(){
        await this.cartlink.click();
    }

    async getFirstProductName(){
        return await this.page.locator('.inventory_item_name').first().textContent();
    }
}