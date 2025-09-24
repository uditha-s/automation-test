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
         this.fristName = page.locator("AccountFrm_firstname");  
            this.lastName = page.locator("AccountFrm_lastname");
            this.email = page.locator("AccountFrm_email");
            this.address = page.locator("AccountFrm_address_1");
            this.city = page.locator("AccountFrm_city");
            this.region = page.locator("AccountFrm_zone_id");
            this.postalCode = page.locator("AccountFrm_postcode");
            this.country = page.locator("AccountFrm_country_id");
            this.username = page.locator("AccountFrm_loginname");
            this.password = page.locator("AccountFrm_password");
            this.usernameConfirm = page.locator("AccountFrm_confirm");
            this.privecyPolicy = page.locator("AccountFrm_agree");
            this.btn_continue = page.getByRole('button', { name: 'Continue' });

    }

    async fillDetails() {
        await this.fristName.fill("test");
        await this.lastName.fill("user");
        await this.email.fill("testuser @gmail.com");
        await this.address.fill("123,abc street");
        await this.city.fill("New York");
        await this.region.selectOption("New York");
        await this.postalCode.fill("10001");
        await this.country.selectOption("United States");
        await this.username.fill("testuser");
        await this.password.fill("testuser@123");
        await this.usernameConfirm.fill("testuser@123");
        await this.privecyPolicy.check();
        
    }
    async clickOnContinue() {
        await this.btn_continue.click();    
    }
    
}