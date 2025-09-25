import { Page, Locator, expect } from "@playwright/test";

export class AddressChangePage {
    readonly page: Page;
    readonly continueButton: Locator;
    readonly helpBlockMessages: Locator;

    constructor(page: Page) {
        this.page = page;
        this.continueButton = page.locator('#Address2Frm button:has-text("Continue")');
        this.helpBlockMessages = page.locator('span.help-block');
    }

    async clickContinue() {
        await this.continueButton.click();
    }
    async isAnyErrorVisible(): Promise<boolean> {
        const count = await this.helpBlockMessages.count();
        for (let i = 0; i < count; i++) {
            if (await this.helpBlockMessages.nth(i).isVisible()) {
                return true;
            }
        }
        return false;
    }
}
