import { Page, Locator } from "@playwright/test";
export class LoginPage {
 
  readonly page: Page;
  readonly btn_continue: Locator;
  readonly btn_login: Locator;
  readonly username: Locator;
  readonly password: Locator

  

    constructor(page: Page) {
    this.page = page;
       this.btn_continue = page.getByRole('button', { name: 'Continue' });
       this.btn_login = page.getByRole('button', { name: 'Login' });
       this.username = page.locator("loginFrm_loginname");
       this.password = page.locator("loginFrm_password");

    }

    async clickOnContiue() {
        await this.btn_continue.click();
    }
    async loggin() {
        await this.username.fill("testuser");
        await this.password.fill("testuser@123");
        await this.btn_login.click();   
    }
    
}