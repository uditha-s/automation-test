import { Page, Locator, expect } from "@playwright/test";

export class ConfirmPage {
  readonly page: Page;
  readonly editPaymentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.editPaymentButton = page.locator('a:has-text("Edit Payment")');
  }

  async clickEditPayment() {
    await this.editPaymentButton.click();
    await this.page.waitForLoadState("domcontentloaded"); 
}
}
