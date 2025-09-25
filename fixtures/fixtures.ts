import { test as base, Page } from "@playwright/test";
import { CreateAccountPage } from "../pages/createAccountPage";
import { LoginPage } from "../pages/loginPage";
import { SuccessPage } from "../pages/successPage";
import { HomePage } from "../pages/homePage";
import { Navbar } from "../pages/components/navbar";
import { AccountPage } from "../pages/accountPage";
import { SearchResultsPage } from "../pages/searchResultsPage";
import { CartPage } from "../pages/cartPage";
import { AddressChangePage } from "../pages/addressChangePage";
import { PaymentPage } from "../pages/paymentPage";
import { ConfirmPage } from "../pages/confrimPage";


type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  createAccountPage: CreateAccountPage;
  successPage: SuccessPage;
  accountPage: AccountPage;
  navbar: Navbar;
  cartPage: CartPage;
  searchResultsPage: SearchResultsPage;
  addressChangePage: AddressChangePage;
  paymentPage: PaymentPage;
  confirmPage: ConfirmPage;
  loggedIn:  Promise<void>;  
};

export const test = base.extend<MyFixtures>({
  homePage: async ({ page }: { page: Page }, use) => {
    await use(new HomePage(page));
  },
  loginPage: async ({ page }: { page: Page }, use) => {
    await use(new LoginPage(page));
  },
  createAccountPage: async ({ page }: { page: Page }, use) => {
    await use(new CreateAccountPage(page));
  },
  successPage: async ({ page }: { page: Page }, use) => {
    await use(new SuccessPage(page));
  },
  accountPage: async ({ page }: { page: Page }, use) => {
    await use(new AccountPage(page));
  },
  navbar: async ({ page }: { page: Page }, use) => {
    await use(new Navbar(page));
  },
  searchResultsPage: async ({ page }: { page: Page }, use) => {
    await use(new SearchResultsPage(page));
  },
  cartPage: async ({ page }: { page: Page }, use) => {
    await use(new CartPage(page));
  },
  addressChangePage: async ({ page }: { page: Page }, use) => {
    await use(new AddressChangePage(page));
  },
  paymentPage: async ({ page }: { page: Page }, use) => {
    await use(new PaymentPage(page));
  },
  confirmPage: async ({ page }: { page: Page }, use) => {
    await use(new ConfirmPage(page));
  },
  loggedIn: async ({ page, navbar, loginPage }, use) => {
    await page.goto('/');
    await expect(page).toHaveURL('/');
    await navbar.goToLogin();
    await loginPage.loggin(process.env.USERNAME_LOGIN!, process.env.PASSWORD_LOGIN!);
    await expect(page).toHaveURL(/.*account/);
    await use();
  },
});

export const expect = test.expect;
