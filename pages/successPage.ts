import { Page, Locator } from "@playwright/test";
export class SuccessPage {
 
  readonly page: Page;
  readonly btn_continue: Locator;
  readonly successMessage: Locator;

  

    constructor(page: Page) {
    this.page = page;
       this.btn_continue = page.getByText('Continue', { exact: false });
       this.successMessage = page.locator("div#maincontainer h1");

    }

    async clickOnContiue() {
        await this.btn_continue.click();
    }

    async verifySuccessMessage(){
        await this.page.locator("div#maincontainer h1").isVisible();
    } 
}