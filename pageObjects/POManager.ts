// #Author :Arunima
import{LoginPage}from './LoginPage';
import{DashboardPage}from './DashboardPage';
import{CheckoutPage} from './CheckoutPage';
import{OrderPage} from './OrderPage';
import{OrderConfirmationPage}from './OrderConfirmationPage';
import{OrderHistoryPage} from './OrderHistoryPage';
import{LoginPagePractise}from './LoginPagePractise';
import{ShopPage} from './ShopPage';
import{Page} from '@playwright/test';

export class POManager{

    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    checkoutPage:CheckoutPage;
    orderHistoryPage:OrderHistoryPage;
    orderConfirmationPage:OrderConfirmationPage;
    orderPage:OrderPage;
    loginPagePractise:LoginPagePractise;
    shopPage:ShopPage;
    page:Page;

    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.dashboardPage=new DashboardPage(this.page);
        this.checkoutPage=new CheckoutPage(this.page);
        this.orderPage=new OrderPage(this.page);
        this.orderConfirmationPage=new OrderConfirmationPage(this.page);
        this.orderHistoryPage= new OrderHistoryPage(this.page);
        this.loginPagePractise=new LoginPagePractise(this.page);
        this.shopPage=new ShopPage(this.page);

        
    }

    getLoginPage(){
        return this.loginPage;
    }

    getDashboardPage(){
        return this.dashboardPage;
    }

    getCheckoutPage(){
        return this.checkoutPage;
    }

    getOrderPage(){
        return this.orderPage;
    }

    getOrderConfirmationPage(){
        return this.orderConfirmationPage;
    }

    getorderHistoryPage(){
        return this.orderHistoryPage;
    }

    getLoginPagePractise(){
        return this.loginPagePractise;
    }

    getShopPage(){
        return this.shopPage;
    }
}
