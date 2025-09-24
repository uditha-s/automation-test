import { test, expect } from "../../fixtures/fixtures";
import { faker } from '@faker-js/faker';

test.describe("User account creation", () => {
  test('User can navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('verify that user can navigate to the create account page ', async ({ page, navbar, loginPage }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();
  });

  test('verify that user able to fill mandatory field when creating new account ', async ({ page, navbar, loginPage, createAccountPage }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();

    const password = faker.internet.password();
    const userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      region: "Bristol", 
      postalCode: faker.location.zipCode('#####'),
      country: "United States", 
      username: faker.internet.password(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password(),
    };
    await createAccountPage.fillDetails(userData);
    await createAccountPage.clickOnContinue();
  });

  test('verify that user able to create new account', async ({ page, navbar, loginPage, createAccountPage,successPage }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();

    const password = faker.internet.password();
    const userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      region: "Bristol", 
      postalCode: faker.location.zipCode('#####'),
      country: "United States", 
      username: faker.internet.password(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password(),
    };
    await createAccountPage.fillDetails(userData);
    await createAccountPage.clickOnContinue();
    await successPage.clickOnContiue();
  });

  test('verify that new user able to navigate home page after creating new account', async ({ page, navbar, loginPage, createAccountPage,successPage,accountPage}) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.clickOnContiue();

    const password = faker.internet.password();
    const userData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      address: faker.location.streetAddress(),
      city: faker.location.city(),
      region: "Bristol", 
      postalCode: faker.location.zipCode('#####'),
      country: "United States", 
      username: faker.internet.password(),
      password: faker.internet.password(),
      confirmPassword: faker.internet.password(),
    };  
    await createAccountPage.fillDetails(userData);
    await createAccountPage.clickOnContinue();
    await successPage.clickOnContiue();
    await accountPage.navigateToHome();
  });
});