import { test, expect } from "../../fixtures/fixtures";

test.describe("User account creation", () => {
  test('User can navigate to home page', async ({ page }) => {
    await page.goto('https://automationteststore.com/');
    await expect(page).toHaveURL('https://automationteststore.com/');
  });

  test('verify that user can navigate to the create account page ', async ({ page,navbar,loginPage}) => {
    await page.goto('https://automationteststore.com/');
    await expect(page).toHaveURL('https://automationteststore.com/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();

  });

  test('verify that user can create new account', async ({ page,navbar,loginPage}) => {
    await page.goto('https://automationteststore.com/');
    await expect(page).toHaveURL('https://automationteststore.com/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();
    

  });


});
