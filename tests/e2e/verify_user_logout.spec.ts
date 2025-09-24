import { test, expect } from "../../fixtures/fixtures";

test.describe("User logout from account", () => {

  test('verify that user can log in to the account with valid user name and password ', async ({ page, navbar, loggedIn }) => {
   await navbar.logout();
   await expect(page).toHaveURL('/.*logout/');
  });

});