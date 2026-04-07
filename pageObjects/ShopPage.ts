// #Author: AI Assistant
import { Page, Locator } from '@playwright/test';

export class ShopPage {
  page: Page;
  iphoneXHeading: Locator;
  samsungNote8Heading: Locator;
  nokiaEdgeHeading: Locator;
  blackberryHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.iphoneXHeading = page.getByRole('heading', { name: 'iphone X', level: 4 });
    this.samsungNote8Heading = page.getByRole('heading', { name: 'Samsung Note 8', level: 4 });
    this.nokiaEdgeHeading = page.getByRole('heading', { name: 'Nokia Edge', level: 4 });
    this.blackberryHeading = page.getByRole('heading', { name: 'Blackberry', level: 4 });
  }

  async verifyPageUrl(expectedUrl: string) {
    const currentUrl = this.page.url();
    if (currentUrl !== expectedUrl) {
      throw new Error(`Expected URL: ${expectedUrl}, but got: ${currentUrl}`);
    }
  }

  async isIphoneXPresent(): Promise<boolean> {
    try {
      await this.iphoneXHeading.waitFor({ state: 'visible', timeout: 5000 });
      return true;
    } catch {
      return false;
    }
  }
}
