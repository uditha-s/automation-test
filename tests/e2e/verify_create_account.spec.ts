import { test, expect } from "../../fixtures/fixtures";
import { faker } from '@faker-js/faker';
import { generateUserData } from "../../testdata/userData";

test.describe("User account creation", () => {

  test.beforeEach(async ({ page, navbar, loginPage }) => {
    await page.goto('/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();

  });

  test('User can navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('verify that user able to fill mandatory field when creating new account ', async ({ page, navbar, loginPage, createAccountPage }) => {


    const userData = generateUserData();

    await createAccountPage.fillDetails(userData);
    await createAccountPage.clickOnContinue();
  });

  test('verify that user able to create new account', async ({ page, navbar, loginPage, createAccountPage, successPage }) => {


    const userData = generateUserData();

    await createAccountPage.fillDetails(userData);
    await createAccountPage.clickOnContinue();
    await successPage.clickOnContiue();
  });

  test('verify that new user able to navigate home page after creating new account', async ({ page, navbar, loginPage, createAccountPage, successPage, accountPage,homePage }) => {


    const userData = generateUserData();

    await createAccountPage.fillDetails(userData);
    await createAccountPage.clickOnContinue();
    await successPage.clickOnContiue();
    await accountPage.navigateToHome();
    const savedName = createAccountPage.getFirstName();
    await navbar.verifyFirstName(savedName!);

  });
});