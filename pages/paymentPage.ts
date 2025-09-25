import { Page, Locator, expect } from "@playwright/test";

export class PaymentPage {
    readonly page: Page;
    readonly changeAddressButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.changeAddressButton = page.locator('a[title="Change Address"]');
    }
    async clickChangeAddress() {
        await this.changeAddressButton.click();
    }
}
