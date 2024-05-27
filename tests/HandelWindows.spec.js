const {test,expect, chromium} = require ('@playwright/test')
test('Handel Pages/Windows',async()=>{
//We are creating owr own page , not and an existing page
//1) launch the browser -create browser instance
const browser =await chromium.launch() 
//2)Create context
const context= await browser.newContext()
//3) Create pages from context
const page1 = await context.newPage()
const page2 = await context.newPage()
const allPages = await context.pages()// allpages
console.log("No of pages is :" + allPages.length)

//handle page1 +page2  independantly
//Open 2 differents pages independantly 
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle('OrangeHRM')
await page2.goto("https://www.orangehrm.com/")
await expect(page2).toHaveTitle('OrangeHRM HR Software | OrangeHRM')
})
test('Handel Multiple Pages/Windows',async()=>{
const browser =await chromium.launch() 
const context= await browser.newContext()
const page1 = await context.newPage()
const allPages = await context.pages()// allpages
console.log("No of pages is :" + allPages.length)
await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
await expect(page1).toHaveTitle('OrangeHRM')
//Create another page from page1
//Promise mean that we have to wait until another page is open
// Start waiting for new page before clicking. Note no await.
const pagePromise = context.waitForEvent('page')
await page1.click("//a[normalize-space()='OrangeHRM, Inc']")
const newPage = await pagePromise //when pagePromise is done we store it in newPage 
await expect(newPage).toHaveTitle("OrangeHRM HR Software | OrangeHRM")

})