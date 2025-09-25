import { test, expect } from "../../fixtures/fixtures";
import { CartPage } from "../../pages/cartPage";
import { products } from "../../testdata/product";

test.describe("User checout cart items", () => {

  test('verify that user can checkout cart items ', async ({ page, navbar, loggedIn,accountPage,confirmPage,cartPage,searchResultsPage,successPage }) => {
     await accountPage.navigateToHome();
     await navbar.searchForItem(products.bronzer);
     await searchResultsPage.verifySearchResultsContain(products.bronzer);
     await searchResultsPage.addItemToCart();
     await cartPage.checkout();
     await confirmPage.clickOnConfirmOrder();
     await successPage.verifySuccessMessage();
     
    });
  test('verify that user cant checkout items with empty cart ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage ,cartPage}) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(products.bronzer);
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await cartPage.setQuantity(0);
   await cartPage.checkout();
   await cartPage.verifyCartIsEmpty();
  });

  test('verify that user cant checkout items with empty payment address ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage ,cartPage,confirmPage,paymentPage,addressChangePage}) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(products.bronzer);
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await cartPage.checkout();
   await confirmPage.clickEditPayment();
   await paymentPage.clickChangeAddress();
   await addressChangePage.clickContinue();
   await addressChangePage.isAnyErrorVisible();
  });


});