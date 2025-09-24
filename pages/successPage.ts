import { Page, Locator } from "@playwright/test";
export class SuccessPage {
 
  readonly page: Page;
  readonly btn_continue: Locator;

  

    constructor(page: Page) {
    this.page = page;
       this.btn_continue = page.getByRole('button', { name: 'Continue' });

    }

    async clickOnContiue() {
        await this.btn_continue.click();
    }
    
}