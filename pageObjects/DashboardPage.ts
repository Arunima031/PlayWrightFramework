// #Author :Arunima
import { Page, Locator } from '@playwright/test'

export class DashboardPage {
  page: Page;
  products: Locator;
  cart: Locator;
  productText: Locator;


  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('div.card-body');
    this.productText = page.locator('.card-body b');
    this.cart = page.locator('[routerlink="/dashboard/cart"]');
  };


  async searchProductAndAdd(productName:string) {
    await this.page.locator('.card-body b').first().waitFor();

    const titles = await this.productText.allTextContents();
    console.log(titles);
    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
      if (await this.products.nth(i).locator('b').textContent() === productName) {
        await this.products.nth(i).locator('button[style*="float"]').click();
        break;
      }
    }
  };

  async goToCartPage() {
    await this.cart.click();
    await this.page.locator('div li').first().waitFor();
  };

}
