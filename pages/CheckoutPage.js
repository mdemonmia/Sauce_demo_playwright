export class CheckoutPage{
    constructor(page){
        this.page=page;
        this.firstName= page.locator('#first-name');
        this.lastName= page.locator('#last-name');
        this.postalCode= page.locator('#postal-code');
        this.errorMsg= page.locator("[data-test='error']");
        this.continueBtn= page.locator('#continue');
        this.finishBtn= page.locator('#finish');
        this.summaryTotal= page.locator('.summary_total_label');
        this.successHeader= page.locator('.complete-header');
    }

    async checkoutForm(firstname,lastname,postalcode){
        await this.firstName.fill(firstname);
        await this.lastName.fill(lastname);
        await this.postalCode.fill(postalcode);
    }

    async clickContinueBtn(){
        await this.continueBtn.click();
    }

    async clickFinishBtn(){
        await this.finishBtn.click();
    }

    async getErrorMsg(){
        return await this.errorMsg;
    }

    async getOrderTotal(){
        return await this.summaryTotal;
    }

    async getSuccessHeader(){
        return await this.successHeader;
    }
}