import { Page, Locator } from "@playwright/test";
export class SuccessPage {
 
  readonly page: Page;
  readonly btn_continue: Locator;

  

    constructor(page: Page) {
    this.page = page;
       this.btn_continue = page.getByText('Continue', { exact: false });

    }

    async clickOnContiue() {
        await this.btn_continue.click();
    }
    
}