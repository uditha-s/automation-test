import { Page, Locator } from "@playwright/test";
export class AccountPage {
 
  readonly page: Page;
  readonly btn_home: Locator;

  

    constructor(page: Page) {
    this.page = page;
       this.btn_home = page.getByText('Home', { exact: false });
    }

    async navigateToHome() {
        await this.btn_home.nth(0).click();
    }
    
}