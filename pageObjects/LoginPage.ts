import { Page, Locator } from '@playwright/test';
export class LoginPage {

     page: Page;
     signInButton: Locator;
     userEmailTextBox: Locator;
     userPasswordTextBox: Locator;
     constructor(page: Page) {
          this.page = page;
          this.signInButton = page.locator('#login');
          this.userEmailTextBox = page.locator('#userEmail');
          this.userPasswordTextBox = page.locator('#userPassword');
     };

     async goToLoginPage() {
          await this.page.goto('https://rahulshettyacademy.com/client/');
     };

     async validLogin(username: string, password: string) {
          await this.userEmailTextBox.fill(username);
          await this.userPasswordTextBox.fill(password);
          await this.signInButton.click();
          await this.page.waitForLoadState('networkidle');
     };


}
