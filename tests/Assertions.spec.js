const {test,expect} = require('@playwright/test')

test('Assertions test',async({page})=>{

await page.goto('https://demo.nopcommerce.com/register')
//to have url
await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
// to have title 
await expect(page).toHaveTitle('nopCommerce demo store. Register')
// to be visible 
const logo = await page.locator("img[alt='nopCommerce demo store']")
await expect(logo).toBeVisible()
//to be enable
const searchBtn= await page.locator("button[class='button-1 search-box-button']")
await expect(searchBtn).toBeEnabled()
//to be checked
const radioBtn= await page.locator("#gender-male")
await radioBtn.click()
await expect(radioBtn).toBeChecked

const NewsletterCheckbox= await page.locator('#Newsletter')
await expect(NewsletterCheckbox).toBeChecked()
//to have Attribute
const registerBtn= await page.locator('#register-button')
await expect(registerBtn).toHaveAttribute('type','submit')
// to have text

const registerTxt=await page.locator("//div[@class='page-title']/h1")
await expect(registerTxt).toHaveText('Register')


//to contain text

})