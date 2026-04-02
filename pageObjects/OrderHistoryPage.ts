import { expect,Page,Locator } from '@playwright/test';

export class OrderHistoryPage{

      orderHistoryList: Locator;
      orderIdText: Locator;
      emailAddress: Locator;
      signOutButton: Locator;
      loginTitle:Locator;


    constructor(page:Page){
     this.orderHistoryList=page.locator('tbody tr');
     this.orderIdText=page.locator('div.col-text.-main');
     this.emailAddress=page.locator('div.address');
     this.signOutButton= page.locator('.fa-sign-out');
     this.loginTitle= page.locator('h1.login-title');
    }


    async findOrderIDAndVisitDetailtoConfirm(orderID:any,username:string){
    const orderHistoryListCount=await this.orderHistoryList.count();

    for(let i=0;i<orderHistoryListCount;i++){
    const text=await this.orderHistoryList.nth(i).locator('th').textContent();

    if(text===orderID){
        await this.orderHistoryList.nth(i).locator('button:has-text("View")').click();
        break;
    }}

    await expect(this.orderIdText).toHaveText(orderID);
    await expect(this.emailAddress.first().locator('p').first()).toContainText(username);
    };


    async signOutApp(){
    await this.signOutButton.click();
    await this.loginTitle.waitFor();
    expect(await this.loginTitle.isVisible()).toBeTruthy();
    }
}




  
   
    
   
    


    
    
