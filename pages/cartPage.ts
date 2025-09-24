import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly removeButton: Locator;
    readonly emptyCartMessage: Locator;

    constructor(page: Page) {
        this.page = page;
        this.removeButton = page.locator('table tbody tr td a[href*="remove"]');
        this.emptyCartMessage = page.locator('text=Your shopping cart is empty');
    }

    async removeItem() {
        await this.removeButton.click();
        await this.page.waitForTimeout(1000); // can also use locator.waitFor({ state: 'detached' })
    }

    async verifyCartIsEmpty() {
        await expect(this.emptyCartMessage).toBeVisible();
    }
}
