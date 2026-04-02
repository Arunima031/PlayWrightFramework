import{LoginPage}from './LoginPage';
import{DashboardPage}from './DashboardPage';
import{CheckoutPage} from './CheckoutPage';
import{OrderPage} from './OrderPage';
import{OrderConfirmationPage}from './OrderConfirmationPage';
import{OrderHistoryPage} from './OrderHistoryPage';
import{Page} from '@playwright/test';

export class POManager{

    loginPage:LoginPage;
    dashboardPage:DashboardPage;
    checkoutPage:CheckoutPage;
    orderHistoryPage:OrderHistoryPage;
    orderConfirmationPage:OrderConfirmationPage;
    orderPage:OrderPage;
    page:Page;

    constructor(page:Page){
        this.page=page;
        this.loginPage=new LoginPage(this.page);
        this.dashboardPage=new DashboardPage(this.page);
        this.checkoutPage=new CheckoutPage(this.page);
        this.orderPage=new OrderPage(this.page);
        this.orderConfirmationPage=new OrderConfirmationPage(this.page);
        this.orderHistoryPage= new OrderHistoryPage(this.page);

        
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
}
