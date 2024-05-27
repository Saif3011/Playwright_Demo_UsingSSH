const{test,expect}=require('@playwright/test')
import {LoginPageAuto}  from "../pages/LoginPageAuto";
test('login to learn automation course',async({page})=>{
const loginPageAuto = new LoginPageAuto(page)

   await loginPageAuto.gotoLoginPageAuto()
   await loginPageAuto.Login("saif","dako55@gmail.com","25251295","Delhi","Swimming")
   
    

 await page.waitForTimeout(5000)

    
})