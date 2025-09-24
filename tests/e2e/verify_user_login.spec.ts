import { test, expect } from "../../fixtures/fixtures";

test.describe("User log in to account", () => {
  test('User can navigate to home page', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
  });

  test('verify that user can log in to the account with valid user name and password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin(process.env.USERNAME_LOGIN!, process.env.PASSWORD_LOGIN!);
    await expect(page).toHaveURL(/.*account/);
  });

   test('verify that user cant log in to the account with invalid user name and password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin(process.env.USERNAME_INVALID!, process.env.USERNAME_INVALID!);
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator(".alert.alert-danger")).toHaveText("× Error: Incorrect login or password provided.");

  });

   test('verify that user cant log in to the account with empty user name and password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin("","");
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator(".alert.alert-danger")).toHaveText("× Error: Incorrect login or password provided.");

  });

    test('verify that user cant log in to the empty user name and correct password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin("",process.env.PASSWORD_LOGIN!);
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator(".alert.alert-danger")).toHaveText("× Error: Incorrect login or password provided.");

  });

   test('verify that user cant log in to the correct user name and empty password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin(process.env.USERNAME_LOGIN!,"");
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator(".alert.alert-danger")).toHaveText("× Error: Incorrect login or password provided.");

  });

   test('verify that user cant log in to the incorrect user name and correct password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin(process.env.USERNAME_INVALID!,process.env.PASSWORD_LOGIN!);
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator(".alert.alert-danger")).toHaveText("× Error: Incorrect login or password provided.");

  });

   test('verify that user cant log in to the correct user name and incorrect password ', async ({ page, navbar, loginPage }) => {
   await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin(process.env.USERNAME_LOGIN!,process.env.PASSWORD_INVALID!);
    await expect(page).toHaveURL(/.*login/);
    await expect(page.locator(".alert.alert-danger")).toHaveText("× Error: Incorrect login or password provided.");

  });


  
});