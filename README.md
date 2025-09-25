# Automation Test Repository for automationteststore.com

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-1.x-blue)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

This repository contains automated tests for web applications using **Playwright** with **TypeScript**, designed for end-to-end testing of user workflows such as account management, search, and cart operations in the website.

---

## Features
- User account creation and login  
- Product search and suggestions  
- Add, remove, and update items in the cart  
- Out-of-stock handling  
- Page navigation and content validation  
- Dynamic test data generation using **Faker.js**

---

## Frameworks & Tools
- **Playwright** – End-to-end testing framework  
- **Node.js** – Runtime environment  
- **JavaScript / TypeScript** – Test scripting  
- **Faker.js** – Dynamic test data  
- **GitHub Actions** – CI/CD integration  
- **Postman** – API testing  

---

## Setup Instructions

1. **Clone the repository**

git clone https://github.com/uditha-s/automation-test.git
cd automation-test

2. **Install dependencies**
npm install

3. **Install Playwright browsers**
npx playwright install

4. **Setup environment variables**
Create a .env file in the root directory

*BASE_URL=https://automationteststore.com*<br>
*USERNAME=your_username*<br>
*PASSWORD=your_password*<br>

---

## Running Tests Locally

1. **Run all tests**<br>
npx playwright test

2. **Run a specific test with tag**<br>

npx playwright test --grep-invert @cart <br>
or <br>
npx playwright test tests/path/to/testFile.spec.ts<br>


3. **Run tests in headed mode**<br>

npx playwright test --headed<br>

4. **Run tests in a specific browser**<br>

npx playwright test --project=chromium<br>
npx playwright test --project=firefox<br>
npx playwright test --project=webkit<br>



5. **Generate HTML report**<br>

npx playwright show-report<br>




