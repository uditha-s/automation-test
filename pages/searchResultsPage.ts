import { Page, Locator } from "@playwright/test";
export class SearchResultsPage {
 
  readonly page: Page;
  readonly btn_continue: Locator;
  readonly errorMessage :Locator;
  readonly addToCartButton: Locator;
  

    constructor(page: Page) {
    this.page = page;
    this.btn_continue = page.getByText('Continue', { exact: false });
    this.errorMessage = page.locator("text=no product that matches");
    this.addToCartButton = page.locator('ul.productpagecart a.cart');


    }

    async clickOnContiue() {
        await this.btn_continue.click();
    }
    async verifyErrorMessage(){
        await this.errorMessage.isVisible();
    }
    async addItemToCart(){
        await this.addToCartButton.first().click();
    }

    
}