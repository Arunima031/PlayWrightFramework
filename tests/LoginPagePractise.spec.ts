// #Author: AI Assistant
import { test, expect } from '@playwright/test';
import { POManager } from '../pageObjects/POManager';

test.describe('Practise Login Page Tests', () => {
  let poManager: POManager;

  test.beforeEach(async ({ page }) => {
    poManager = new POManager(page);
  });

  test('@Web Login with User Role and Consultant Type', async ({ page }) => {
    // Initialize page objects
    const loginPagePractise = poManager.getLoginPagePractise();
    const shopPage = poManager.getShopPage();

    // Navigate to login page
    await loginPagePractise.goToLoginPage();

    // Perform login with all required fields
    await loginPagePractise.login(
      'rahulshettyacademy',
      'Learning@830$3mK2',
      'Consultant'
    );

    // Validate URL after successful login
    await shopPage.verifyPageUrl('https://rahulshettyacademy.com/angularpractice/shop');

    // Validate iPhone X is present on the shop page
    const isIphonePresent = await shopPage.isIphoneXPresent();
    expect(isIphonePresent).toBeTruthy();

    // Additional validation - verify URL using Playwright's built-in expect
    await expect(page).toHaveURL('https://rahulshettyacademy.com/angularpractice/shop');

    console.log('Test passed: Successfully logged in and validated shop page');
  });
});
