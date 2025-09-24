import { test as base, Page } from "@playwright/test";
import { CreateAccountPage } from "../pages/createAccountPage";
import { LoginPage } from "../pages/loginPage";
import { SuccessPage } from "../pages/successPage";
import { HomePage } from "../pages/homePage";
import { Navbar } from "../pages/components/navbar";
import { AccountPage } from "../pages/accountPage";

type MyFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  createAccountPage: CreateAccountPage;
  successPage: SuccessPage;
  navbar: Navbar;
  accountPage: AccountPage;
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
  navbar: async ({ page }: { page: Page }, use) => {
    await use(new Navbar(page));
  },
  accountPage: async ({ page }: { page: Page }, use) => {
    await use(new AccountPage(page));
  }
});

export const expect = test.expect;
