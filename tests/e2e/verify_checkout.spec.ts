import { test, expect } from "../../fixtures/fixtures";

test.describe("User checout cart items", () => {

  test('verify that user cant checkout items with empty cart ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("Skinsheen Bronzer Stick");
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await searchResultsPage.setQuantity(0);

  });

});