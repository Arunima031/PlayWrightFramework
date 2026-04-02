// #Author :Arunima
import { test as baseTest } from '@playwright/test';

interface TestDataforOrder {
    productName: string;
    username: string;
    password: string;
    country: string;
}
export const customtest = baseTest.extend<{ testDataforOrder: TestDataforOrder }>({

    testDataforOrder: {
        productName: "ZARA COAT 3",
        username: "abc.123@example.com",
        password: "Learning@123",
        country: "India"
    }
})