import { Page, Locator, expect } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly featuredProducts: Locator;
 

  constructor(page: Page) {
    this.page = page;
    this.featuredProducts = page.locator(".block_frame_featured a.prdocutname");

   }


  async clickOnRandomFeaturedProduct() {
    const count = await this.featuredProducts.count();
    if (count === 0) {
      throw new Error("No featured products found on the Home Page");
    }

    const randomIndex = Math.floor(Math.random() * count);
    const productName = await this.featuredProducts.nth(randomIndex).innerText();
    await this.featuredProducts.nth(randomIndex).click();
    return productName; 
  }
}
