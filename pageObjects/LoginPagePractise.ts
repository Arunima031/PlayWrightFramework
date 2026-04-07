// #Author: AI Assistant
import { Page, Locator } from '@playwright/test';

export class LoginPagePractise {
  page: Page;
  usernameField: Locator;
  passwordField: Locator;
  adminRadio: Locator;
  userRadio: Locator;
  userTypeDropdown: Locator;
  termsCheckbox: Locator;
  signInButton: Locator;
  okayButton: Locator;
  cancelButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.getByRole('textbox', { name: 'Username:' });
    this.passwordField = page.getByRole('textbox', { name: 'Password:' });
    this.adminRadio = page.getByRole('radio', { name: 'Admin' });
    this.userRadio = page.getByRole('radio', { name: 'User' });
    this.userTypeDropdown = page.getByRole('combobox');
    this.termsCheckbox = page.getByRole('checkbox', { name: 'I Agree to the terms and' });
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.okayButton = page.getByRole('button', { name: 'Okay' });
    this.cancelButton = page.getByRole('button', { name: 'Cancel' });
  }

  async goToLoginPage() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async enterUsername(username: string) {
    await this.usernameField.fill(username);
  }

  async enterPassword(password: string) {
    await this.passwordField.fill(password);
  }

  async selectUserRole() {
    await this.userRadio.click();
  }

  async selectUserType(userType: string) {
    await this.userTypeDropdown.selectOption(userType);
  }

  async acceptDialogPopup() {
    await this.okayButton.click();
  }

  async clickTermsCheckbox() {
    await this.termsCheckbox.click();
  }

  async clickSignIn() {
    await this.signInButton.click();
  }

  async login(username: string, password: string, userType: string) {
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.selectUserRole();
    await this.selectUserType(userType);
    await this.acceptDialogPopup();
    await this.clickTermsCheckbox();
    await Promise.all([
      this.page.waitForURL('https://rahulshettyacademy.com/angularpractice/shop'),
      this.clickSignIn()
    ]);
  }
}
