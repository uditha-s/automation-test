import { Page, Locator, expect } from "@playwright/test";

export class CartPage {
    readonly page: Page;
    readonly removeButton: Locator;
    readonly emptyCartMessage: Locator;
    readonly quantityInput: Locator;
    readonly checkoutButton: Locator;
    

    constructor(page: Page) {
        this.page = page;
        this.removeButton = page.locator('table tbody tr td a[href*="remove"]');
        this.emptyCartMessage = page.locator('text=Your shopping cart is empty');
        this.quantityInput = page.locator('table tbody tr td input[name*="quantity"]');
        this.checkoutButton = page.locator('#cart_checkout1');
    }

    async removeItem() {
        await this.removeButton.last().click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    async verifyCartIsEmpty() {
        await expect(this.emptyCartMessage).toBeVisible();
    }
    async setQuantity(quantity: number) {
        await this.quantityInput.fill(quantity.toString());
    }
    async checkout() {
         await this.checkoutButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    async verifyRemovedItemNotInCart(removedItemName: string) {
        const cartItems = this.page.locator('table tbody tr td:nth-child(2) a');
        const itemCount = await cartItems.count();  
        for (let i = 0; i < itemCount; i++) {
            const itemName = await cartItems.nth(i).innerText();    
            if (itemName.trim() === removedItemName) {
                throw new Error(`Item "${removedItemName}" was found in the cart after removal.`);
            }   
        }
    }

}
