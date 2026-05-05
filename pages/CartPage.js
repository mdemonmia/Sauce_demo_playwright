export class CartPage{
    constructor(page){
        this.page=page;
        this.cartitem= page.locator('.cart_item');
        this.continueshop= page.locator('#continue-shopping');
        this.checkoutBtn=page.locator('#checkout');

    }

    async cartCount(){
        return await this.cartitem.count();
    }

    async continueShopping(){
        await this.continueshop.click();
    }

    async click_checkout(){
        await this.checkoutBtn.click();
    }


    async removeProduct(...productName){
        const itemcount=await this.cartitem.count();
        for(const pname of productName){
             for(let i=0;i<await itemcount;i++){
                const count= this.cartitem.nth(i);
                const itemName=await count.locator('.inventory_item_name').textContent();
                if(itemName.trim()===pname){
                    await count.locator('button').click();
                    break;
                }
            }
        }
       
    }

    async isproductExist(productName){
        const itemcount=await this.cartitem.count();
        for(let i=0;i<await itemcount;i++){
            const count=await this.cartitem.nth(i);
            const name=await count.locator('.inventory_item_name').textContent();
            if(name.trim()===productName){
                return true;
            }
        }
    }

}