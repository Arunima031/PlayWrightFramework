# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ClientAppPO.spec.ts >> @Web Shopping from Cart for ZARA COAT 3
- Location: tests\ClientAppPO.spec.ts:9:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('div li').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
      - /url: http://qasummit.org/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - heading "No Products in Your Cart !" [level=1] [ref=e31]
```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test'
  2  | 
  3  | export class DashboardPage {
  4  |   page: Page;
  5  |   products: Locator;
  6  |   cart: Locator;
  7  |   productText: Locator;
  8  | 
  9  | 
  10 |   constructor(page: Page) {
  11 |     this.page = page;
  12 |     this.products = page.locator('div.card-body');
  13 |     this.productText = page.locator('.card-body b');
  14 |     this.cart = page.locator('[routerlink="/dashboard/cart"]');
  15 |   };
  16 | 
  17 | 
  18 |   async searchProductAndAdd(productName:string) {
  19 |     await this.page.locator('.card-body b').first().waitFor();
  20 | 
  21 |     const titles = await this.productText.allTextContents();
  22 |     console.log(titles);
  23 |     const count = await this.products.count();
  24 |     for (let i = 0; i < count; i++) {
  25 |       if (await this.products.nth(i).locator('b').textContent() === productName) {
  26 |         await this.products.nth(i).locator('button[style*="float"]').click();
  27 |         break;
  28 |       }
  29 |     }
  30 |   };
  31 | 
  32 |   async goToCartPage() {
  33 |     await this.cart.click();
> 34 |     await this.page.locator('div li').first().waitFor();
     |                                               ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  35 |   };
  36 | 
  37 | }
  38 | 
```