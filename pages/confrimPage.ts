import { Page, Locator, expect } from "@playwright/test";

export class ConfirmPage {
  readonly page: Page;
  readonly editPaymentButton: Locator;
  readonly confirmOrderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editPaymentButton = page.locator('a:has-text("Edit Payment")');
    this.confirmOrderButton = page.locator('#checkout_btn');
  }

  async clickEditPayment() {
    await this.editPaymentButton.click();
    await this.page.waitForLoadState("domcontentloaded"); 
}
async clickOnConfirmOrder() {
    await this.confirmOrderButton.click();
    await this.page.waitForLoadState("domcontentloaded");     
    

}
}
