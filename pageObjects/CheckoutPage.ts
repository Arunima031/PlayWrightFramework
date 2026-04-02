import {Page,Locator} from '@playwright/test'

export class CheckoutPage{

  page:Page;
  productText:Locator;
  checkoutButton:Locator;

    constructor(page:Page){
      this.page=page;
      this.productText=page.locator('h3:has-text("ZARA COAT 3")');
      this.checkoutButton= page.locator('text=Checkout');
    }

    async getProductName(productName:string){
     return await this.page.locator("h3:has-text('"+productName+"')").isVisible();
    }

    async checkoutCartItem(){
    await this.checkoutButton.click();
    };
}