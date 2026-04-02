import { test,expect } from '@playwright/test';
import {POManager} from '../pageObjects/POManager';
import {customtest} from'../testData/test-base';
//json> string> js object
const data= JSON.parse(JSON.stringify(require ('../testData/ClientAppPOTestData.json')));

test.describe.configure({mode:'parallel'})
for(const testData of data){
test(`@Web Shopping from Cart for ${testData.productName}`,async({page})=>{


    const poManager=new POManager(page);
  
    const loginPage=poManager.getLoginPage();
    await loginPage.goToLoginPage();
    await loginPage.validLogin(testData.username,testData.password)

  
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAndAdd(testData.productName);
    await dashboardPage.goToCartPage();

    const checkoutPage=poManager.getCheckoutPage();
    expect(await checkoutPage.getProductName(testData.productName)).toBeTruthy()
    await checkoutPage.checkoutCartItem();


    const orderPage=poManager.getOrderPage();
    await orderPage.selectCountry(testData.country);
    await expect(orderPage.validateUsername()).toHaveText(testData.username);
    await orderPage.clickPlaceOrder();

    const orderConfirmationPage=poManager.getOrderConfirmationPage();
    await expect(await orderConfirmationPage.validateOrderConfirm()).toContainText('Thankyou for the order');
    let orderID: any;
    orderID=await orderConfirmationPage.fetchOrderID();
     await  orderConfirmationPage.goToOrderHistoryPage();


    const orderHistoryPage= poManager.getorderHistoryPage();
    await orderHistoryPage.findOrderIDAndVisitDetailtoConfirm(orderID,testData.username);
    await orderHistoryPage.signOutApp();


});

}

customtest(`@Web Placing order`,async({page,testDataforOrder})=>{


    const poManager=new POManager(page);
  
    const loginPage=poManager.getLoginPage();
    await loginPage.goToLoginPage();
    await loginPage.validLogin(testDataforOrder.username,testDataforOrder.password)

  
    const dashboardPage=poManager.getDashboardPage();
    await dashboardPage.searchProductAndAdd(testDataforOrder.productName);
    await dashboardPage.goToCartPage();

    const checkoutPage=poManager.getCheckoutPage();
    expect(await checkoutPage.getProductName(testDataforOrder.productName)).toBeTruthy()
    await checkoutPage.checkoutCartItem();


    const orderPage=poManager.getOrderPage();
    await orderPage.selectCountry(testDataforOrder.country);
    await expect(orderPage.validateUsername()).toHaveText(testDataforOrder.username);
    await orderPage.clickPlaceOrder();
});
