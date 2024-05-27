
const {test,expect} = require('@playwright/test')
let page;

test.beforeAll(async({browser})=>{
page= await browser.newPage()// this page is shared in multiple test
await page.goto('https://www.demoblaze.com/index.html')
await page.click("#login2")
await page.locator("#loginusername").fill('pavanol')
await page.locator("#loginpassword").fill('test@123')
await page.click("//button[normalize-space()='Log in']")
})
test.afterAll(async()=>{
//logout
await page.click('#logout2')
})

test('Home page test',async ({})=>{
//Home page
const product= await page.$$('.hrefch')
await expect(product.length).toBe(9)
await page.waitForTimeout(5000)
});

test('Add product',async ({})=>{ //page is eliminated from this test because its already created by using hook
    // Add product on the cart
   await page.click("//a[normalize-space()='Samsung galaxy s6']")
   
   page.on('dialog', async dialog=>{
   expect(dialog.message()).toContain('Product added.')
   dialog.accept()
   })
   await page.click("//a[@class='btn btn-success btn-lg']")
   await page.waitForTimeout(5000)
    })