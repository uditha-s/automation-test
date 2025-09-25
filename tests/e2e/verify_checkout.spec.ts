import { test, expect } from "../../fixtures/fixtures";

test.describe("User checout cart items", () => {

  test('verify that user cant checkout items with empty cart ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage ,cartPage}) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("Skinsheen Bronzer Stick");
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await cartPage.setQuantity(0);
   await cartPage.checkout();
   await cartPage.verifyCartIsEmpty();
  });

  test('verify that user cant checkout items with empty payment address ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage ,cartPage,confirmPage,paymentPage,addressChangePage}) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("Skinsheen Bronzer Stick");
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await cartPage.checkout();
   await confirmPage.clickEditPayment();
   await paymentPage.clickChangeAddress();
   await addressChangePage.clickContinue();
   await addressChangePage.isAnyErrorVisible();
  });


});