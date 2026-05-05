# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.js >> login tests >> Null username password test
- Location: tests\Login.spec.js:63:10

# Error details

```
Error: locator.fill: value: expected string, got object
```

# Test source

```ts
  1  | export class LoginPage{
  2  |     constructor(page){
  3  |         this.page=page;
  4  |         this.username='#user-name';
  5  |         this.password='#password';
  6  |         this.loginBtn='#login-button';
  7  |         this.errormsg="//div[@class='error-message-container error']"
  8  |     }
  9  | 
  10 |     async goto(url){
  11 |         await this.page.goto(url)
  12 |     }
  13 |     async login(username,password){
> 14 |         await this.page.locator(this.username).fill(username);
     |                                                ^ Error: locator.fill: value: expected string, got object
  15 |         await this.page.locator(this.password).fill(password);
  16 |         await this.page.locator(this.loginBtn).click();
  17 |     }
  18 | }
```