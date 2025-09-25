import { test, expect } from "../../fixtures/fixtures";
import "../../utils/randomSearch"
import searchData from "../../testdata/searchRandomData.json";
import { getRandomItem } from "../../utils/randomSearch";
import { products } from "../../testdata/product";
import { outOfStock } from "../../testdata/outofStockProduts";


test.describe('User search items and add to cart',
  {tag:['@cart']},async() => {

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
   test('verify that user can add items in to the cart by search ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(products.bronzer);
   await searchResultsPage.verifySearchResultsContain(products.bronzer);
   await searchResultsPage.addItemToCart();
   
  });
   test('verify that user can add items in to the cart by homepage ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage,homePage,cartPage }) => {
   await accountPage.navigateToHome();
   await homePage.clickOnRandomFeaturedProduct();
   await searchResultsPage.addItemToCart();
   await cartPage.checkout();
  });
  
   test('verify that user can remove items in to the cart ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage,cartPage}) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(products.lipstick);
   await searchResultsPage.addItemToCart();
   await cartPage.removeItem();
   await cartPage.verifyRemovedItemNotInCart(products.lipstick);

  });
   test('verify that user can add item with diffrent qty ', async ({ page, navbar, loggedIn,accountPage,cartPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(products.skincare);
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await cartPage.checkout();
  });

   test('verify that user can remove all the items from the cart (empty cart) ', async ({ page, navbar, loggedIn,accountPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(products.bronzer);
   await searchResultsPage.setQuantity(3);
   await searchResultsPage.addItemToCart();
   await searchResultsPage.removeAllItemsFromCart();
   await searchResultsPage.verifyCartIsEmpty();

  });

  test('verify that user cant add out of the stock items ', async ({ page, navbar, loggedIn,accountPage,cartPage,searchResultsPage }) => {
   await accountPage.navigateToHome();
   await navbar.searchForItem(outOfStock.skincare);
   await searchResultsPage.verifyOutOfTheStock();
  });
});