import { test, expect } from "../../fixtures/fixtures";
import "../../utils/randomSearch"
import searchData from "../../testdata/searchRandomData.json";
import { getRandomItem } from "../../utils/randomSearch";


test.describe("User search items and add to cart ", () => {

  test('verify that user can search items in the website ', async ({ page, navbar, loggedIn,accountPage }) => {
   const randomSearchItem = getRandomItem(searchData.items);
   await accountPage.navigateToHome();
   await navbar.searchForItem(randomSearchItem);
  });
   test('verify that user can see error mesaage when search invalid item ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("invaliditem_data");
   await searchResultsPage.verifyErrorMessage();
   
  });
 test('verify that user can see error mesaage when search with empty field ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("");
   await searchResultsPage.verifyErrorMessage();
  });
   test('verify that user can add items in to the cart ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("Skinsheen Bronzer Stick");
   await searchResultsPage.addItemToCart();

  });
   test('verify that user can remove items in to the cart ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage,cartPage}) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem("Skinsheen Bronzer Stick");
   await searchResultsPage.addItemToCart();
   await cartPage.removeItem();
   await cartPage.verifyCartIsEmpty();
  });
  

});