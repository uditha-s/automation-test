import { Page, Locator, expect } from "@playwright/test";
export class SearchResultsPage {
 
  readonly page: Page;
  readonly btn_continue: Locator;
  readonly errorMessage :Locator;
  readonly addToCartButton: Locator;
  readonly quantityInput: Locator;
  readonly removeButtons: Locator;
  readonly emptyCartMessage: Locator;
  readonly outOfStockMessage: Locator; 

    constructor(page: Page) {
    this.page = page;
    this.btn_continue = page.getByText('Continue', { exact: false });
    this.errorMessage = page.locator("text=no product that matches");
    this.addToCartButton = page.locator('ul.productpagecart a.cart');
    this.quantityInput = page.locator("#product_quantity"); 
    this.removeButtons = page.locator("a.btn.btn-sm.btn-default i.fa-trash-o");
    this.emptyCartMessage = page.locator("text=Your shopping cart is empty!");
     this.outOfStockMessage = page.locator('span.nostock');
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
    async setQuantity(quantity: number) {
        await this.quantityInput.fill(quantity.toString());
    }
    async removeAllItemsFromCart() {
    const count = await this.removeButtons.count();
    for (let i = 0; i < count; i++) {
      await this.removeButtons.first().click();
      await this.page.waitForLoadState('domcontentloaded');  
    }
    }
    async verifyCartIsEmpty() {
    await expect(this.emptyCartMessage).toBeVisible();
  }
  async verifySearchResultsContain(term: string) {
    const productTitles = this.page.locator('div.productname a');
    const count = await productTitles.count();
  }
  async verifyOutOfTheStock() {
    await expect(this.outOfStockMessage).toBeVisible();
  }
}

