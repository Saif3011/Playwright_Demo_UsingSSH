const { test, expect } = require('@playwright/test');
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';
test('Page Object Model test', async ({ page }) => {
//Create an instance of class
 const loginPage= new LoginPage(page)
 await loginPage.gotoLoginPage()
 await loginPage.login("pavanol","test@123")
await page.waitForTimeout(5000)

const homePage =new HomePage(page)
await homePage.addProductToCart("Samsung galaxy s6")
await page.waitForTimeout(5000)
await homePage.goToCart()
//CART
//Check if product is added succesfully
const cart =new CartPage(page);
await page.waitForTimeout(3000)
const status =await cart.checkProductIsInCart("Samsung galaxy s6")
expect(await status).toBe(true)

});

    