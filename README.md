# Playwright TypeScript Framework

A comprehensive end-to-end testing framework built with **Playwright** and **TypeScript**, following the **Page Object Model (POM)** design pattern with integrated **Allure reporting** for detailed test execution reports.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Running Tests](#running-tests)
- [Test Data & Fixtures](#test-data--fixtures)
- [Allure Reporting](#allure-reporting)

## 🎯 Overview

This framework provides a robust automation testing solution for:
- **Multi-browser testing** (Chromium, Firefox, WebKit)
- **Page Object Model** architecture for maintainable test code
- **TypeScript** support for type safety and better IDE support
- **Detailed Allure reports** with screenshots and videos
- **Custom test fixtures** for test data management
- **Cross-platform support** (Windows, macOS, Linux)

## ✨ Features

- ✅ **Page Object Model (POM)** - Organized and maintainable test code
- ✅ **Cross-Browser Testing** - Chromium, Firefox, and WebKit support
- ✅ **Allure Reporting** - Rich HTML reports with screenshots and videos
- ✅ **Retry Logic** - Automatic retry on failures (1 retry configured)
- ✅ **Visual Testing** - Screenshots on failure and video recording
- ✅ **Trace Reports** - Detailed trace logs retained on failure
- ✅ **Custom Fixtures** - Reusable test data through base test extensions
- ✅ **TypeScript Support** - Full type safety and IntelliSense

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)
- **Git** (for version control)

## 🚀 Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd PlaywrightTSFramework
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 📁 Project Structure

```
PlaywrightTSFramework/
├── pageObjects/              # Page Object Model classes
│   ├── LoginPage.ts         # Login page object
│   ├── DashboardPage.ts     # Dashboard page object
│   ├── ShopPage.ts          # Shop page object
│   ├── CheckoutPage.ts      # Checkout page object
│   ├── OrderPage.ts         # Order management page object
│   ├── OrderConfirmationPage.ts  # Order confirmation page object
│   ├── OrderHistoryPage.ts  # Order history page object
│   ├── LoginPagePractise.ts # Practice login page object
│   └── POManager.ts         # Manager class for all page objects
├── tests/                    # Test specification files
│   ├── ClientAppPO.spec.ts  # E2E test suite using POM
│   └── LoginPagePractise.spec.ts # Login functionality tests
├── testData/                 # Test data and fixtures
│   ├── test-base.ts         # Base test configuration with custom fixtures
│   └── ClientAppPOTestData.json # Test data (credentials, product names, etc.)
├── allure-results/          # Allure test reports data (auto-generated)
├── allure-report/           # Generated Allure HTML report (auto-generated)
├── test-results/            # Playwright test results (auto-generated)
├── playwright.config.ts     # Playwright configuration
├── package.json             # Project dependencies and scripts
└── README.md               # This file
```

## ⚙️ Configuration

### playwright.config.ts

The main configuration file includes:
- **Test Directory**: `./tests`
- **Timeout**: 30 seconds per test
- **Assertion Timeout**: 5 seconds
- **Retries**: 1 automatic retry on failure
- **Screenshots**: Captured on failure
- **Videos**: Recorded on failure
- **Trace**: Retained on failure for debugging

### Browser Configurations

1. **Chromium** (Default)
   - Desktop Chrome settings
   - HTTPS errors ignored
   - Geolocation permission enabled
   - Video and screenshot on failure

2. **Firefox**
   - Desktop Firefox settings
   - Headless mode enabled
   - Screenshots disabled
   - Focused on headless execution

3. **WebKit (Safari)**
   - Desktop Safari settings
   - Default device configuration

## 🧪 Running Tests

### 1. Run All Tests (Regression Suite)
```bash
npm run regression
```
Executes all test files in the tests directory across all configured browsers.

### 2. Run Web Tests Only
```bash
npm run webTest
```
Runs only tests tagged with `@Web`.

### 3. Run Tests by Browser

**Chromium:**
```bash
npm run chromeTest
```

**Firefox:**
```bash
npm run firefoxTest
```

### 4. Run Specific Test File
```bash
npm run loginTest
```
Runs the `LoginPagePractise.spec.ts` test file in Chromium.

### 5. Run Tests with Custom Options
```bash
# Run tests in headed mode
npx playwright test --headed

# Run tests with specific workers
npx playwright test --workers=1

# Run tests with debugging
npx playwright test --debug

# Run tests matching a pattern
npx playwright test --grep "Login"
```

## 📊 Test Data & Fixtures

### test-base.ts
The framework extends Playwright's base test with custom fixtures:

```typescript
interface TestDataforOrder {
    productName: string;
    username: string;
    password: string;
    country: string;
}
```

This fixture provides reusable test data for order-related tests with:
- **Product Name**: "ZARA COAT 3"
- **Username**: "abc.123@example.com"
- **Password**: "Learning@123"
- **Country**: "India"

### ClientAppPOTestData.json
Contains external test data that can be loaded in tests.

### Usage Example
```typescript
import { customtest as test } from "../testData/test-base";

test("Place Order", async ({ page, testDataforOrder }) => {
    // testDataforOrder is automatically available in the test
    console.log(testDataforOrder.productName);
});
```

## 📈 Allure Reporting

### Generate Allure Report
```bash
npm run allureRun
```

This command:
1. Generates the Allure HTML report from test results
2. Automatically opens the report in your default browser

### View Reports Manually
```bash
# Generate report
allure generate ./allure-results --clean

# Open in browser
allure open
```

### Report Features
- Test execution timeline
- Pass/Fail metrics
- Screenshot attachments
- Video recordings of failed tests
- Detailed error logs
- Test history tracking

## 📝 Page Object Model Structure

### POManager.ts
Centralized manager for all page objects:

## 🔧 Development Tips

1. **Run tests in UI mode** for better debugging:
   ```bash
   npx playwright test --ui
   ```

2. **Use codegen to generate selectors**:
   ```bash
   npx playwright codegen <url>
   ```

3. **Debug specific tests**:
   ```bash
   npx playwright test --debug --headed
   ```

4. **View trace files**:
   ```bash
   npx playwright show-trace trace.zip
   ```

## 👤 Author

**Arunima**

## 📄 License

ISC

---

**Happy Testing!** 🎉 
