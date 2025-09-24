import { Page, Locator } from "@playwright/test";
export class CreateAccountPage {
  
  readonly page: Page;
  readonly fristName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly address: Locator
  readonly city: Locator
  readonly region: Locator
  readonly postalCode: Locator
  readonly country: Locator
  readonly username: Locator
  readonly password: Locator
  readonly usernameConfirm: Locator
  readonly privecyPolicy: Locator
  readonly btn_continue: Locator

  constructor(page: Page) {
    this.page = page;
    this.fristName = page.locator("#AccountFrm_firstname");
    this.lastName = page.locator("#AccountFrm_lastname");
    this.email = page.locator("#AccountFrm_email");
    this.address = page.locator("#AccountFrm_address_1");
    this.city = page.locator("#AccountFrm_city");
    this.region = page.locator("#AccountFrm_zone_id");
    this.postalCode = page.locator("#AccountFrm_postcode");
    this.country = page.locator("#AccountFrm_country_id");
    this.username = page.locator("#AccountFrm_loginname");
    this.password = page.locator("#AccountFrm_password");
    this.usernameConfirm = page.locator("#AccountFrm_confirm");
    this.privecyPolicy = page.locator("#AccountFrm_agree");
    this.btn_continue = page.getByRole('button', { name: 'Continue' });
  }

  async fillDetails(data: { firstName: any; lastName: any; email: any; address: any; city: any; region: any; postalCode: any; country: any; username?: string; password: any; confirmPassword?: string; }) {
    await this.fristName.fill(data.firstName);
    await this.lastName.fill(data.lastName);
    await this.email.fill(data.email);
    await this.address.fill(data.address);
    await this.city.fill(data.city);
    await this.region.selectOption(data.region);
    await this.postalCode.fill(data.postalCode);
    await this.country.selectOption(data.country);
    await this.username.fill(data.password);
    await this.password.fill(data.password);
    await this.usernameConfirm.fill(data.password);
    await this.privecyPolicy.check();
  }

  async clickOnContinue() {
    await this.btn_continue.click();
  }
}