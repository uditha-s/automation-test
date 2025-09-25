import { Page, Locator, expect } from "@playwright/test";

export class Navbar {

  readonly page: Page;
  readonly btn_loginOrRegister: Locator;
  readonly btn_account: Locator;
  readonly btn_logout: Locator;
  readonly btn_cart: Locator;
  readonly btn_checkout: Locator;
  readonly input_search: Locator;
  readonly btn_search: Locator;
  readonly accountNameLabel: Locator;

  constructor(page: Page) {
    this.page = page;

    this.btn_loginOrRegister = page.locator('a', { hasText: 'Login or register' });
    this.btn_account = page.locator('a.top.menu_account'); 
    this.btn_logout = page.locator('li[data-id="menu_logout"] a');
    this.btn_cart = page.locator('a.top.nobackground'); 
    this.btn_checkout = page.locator('a.top.menu_checkout');
    this.input_search = page.locator('#filter_keyword');
    this.btn_search = page.locator('.button-in-search');
    this.accountNameLabel = page.getByText(/^Welcome back/);
  }

  
  async goToLogin() {
    await this.btn_loginOrRegister.click();
  }

 
  async goToAccount() {
    await this.btn_account.click();
  }

  
  async goToCart() {
    await this.btn_cart.click();
  }

  async logout() {
    await this.btn_account.hover();
    await this.btn_logout.click();
  }


  async goToCheckout() {
    await this.btn_checkout.click();
  }

  async searchForItem(item: string) {
    await this.input_search.fill(item);
    await this.btn_search.click();
  }
  async verifyFirstName(expectedFirstName: string) {
    await expect(this.accountNameLabel).toHaveText(
      new RegExp(`Welcome back ${expectedFirstName}`, "i")
    );
  }


}
