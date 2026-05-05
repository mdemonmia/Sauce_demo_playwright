export class LoginPage{
    constructor(page){
        this.page=page;
        this.username='#user-name';
        this.password='#password';
        this.loginBtn='#login-button';
        this.errormsg="//div[@class='error-message-container error']"
    }

    async goto(url){
        await this.page.goto(url)
    }
    async login(username,password){
        await this.page.locator(this.username).fill(username);
        await this.page.locator(this.password).fill(password);
        await this.page.locator(this.loginBtn).click();
    }
}