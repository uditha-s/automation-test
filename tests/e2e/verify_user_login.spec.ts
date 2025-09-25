import { test, expect } from "../../fixtures/fixtures";

test.describe("User log in to account", () => {

  test.beforeEach(async ({ page, navbar }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
  });

  test('User can navigate to login page', async ({ page }) => {
    await expect(page).toHaveURL(/.*login/);
  });

  test('verify that user can log in to the account with valid user name and password ', async ({ page, loginPage }) => {
    await loginPage.login(process.env.USERNAME_LOGIN!, process.env.PASSWORD_LOGIN!);
    await expect(page).toHaveURL(/.*account/);
  });

  const invalidCredentials = [
    { username: "", password: "" },
    { username: "", password: process.env.PASSWORD_LOGIN! },
    { username: process.env.USERNAME_LOGIN!, password: "" },
    { username: process.env.USERNAME_INVALID!, password: process.env.PASSWORD_LOGIN! },
    { username: process.env.USERNAME_LOGIN!, password: process.env.PASSWORD_INVALID! },
    { username: process.env.USERNAME_INVALID!, password: process.env.USERNAME_INVALID! },
  ];

  invalidCredentials.forEach(({ username, password }) => {
    test(`User cannot log in with username='${username}' and password='${password}'`, async ({ page, loginPage }) => {
      await loginPage.login(username, password);
      await expect(page).toHaveURL(/.*login/);
      await loginPage.expectLoginError();
    });
  });

});
