import { Page, Locator } from '@playwright/test';

export class OrderPage {
    countryTextBox: Locator;
    options: Locator;
    placeOrder: Locator;
    usernameText: Locator;


    constructor(page: Page) {
        this.countryTextBox = page.locator('[placeholder="Select Country"]');
        this.options = page.locator('section.ta-results')
        this.placeOrder = page.locator('a:has-text("Place Order")');
        this.usernameText = page.locator('label[style*="gray"]');
    };


    async selectCountry(country:string) {
        await this.countryTextBox.pressSequentially(country);
        await this.options.waitFor();
        const countEle = await this.options.locator('button').count();

        for (let i = 0; i < countEle; i++) {
            const text = await this.options.locator('button').nth(i).textContent() as string;
            const requiredText = text.trim();

            if (requiredText === country) {
                await this.options.locator('button').nth(i).click();
                break;
            }
        };
    };

    validateUsername() :Locator{
        return this.usernameText;
    };

    async clickPlaceOrder() {
        await this.placeOrder.click();
    }
}