// #Author :Arunima
import { Page, Locator } from '@playwright/test';
export class OrderConfirmationPage {
  page: Page;
  orderConfirm: Locator;
  orderID: Locator;
  orderHistoryLink: Locator;
  orderHistoryBody: Locator;

  constructor(page: Page) {
    this.page = page;
    this.orderConfirm = this.page.locator('.hero-primary');
    this.orderID = this.page.locator('label.ng-star-inserted');
    this.orderHistoryLink = this.page.locator('label:has-text("Orders History Page")');
    this.orderHistoryBody = this.page.locator("tbody");
  }

  async validateOrderConfirm() {
    return this.orderConfirm;
  }

  async fetchOrderID() {
    const orderHistory = await this.orderID.textContent() as any;
    const orderId = orderHistory.split(" ")[2]
    console.log(orderId);
    return orderId;
  }

  async goToOrderHistoryPage() {
    await this.orderHistoryLink.click();
    await this.orderHistoryBody.waitFor();
  }
}







