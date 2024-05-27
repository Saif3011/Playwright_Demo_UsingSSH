const {test,expect}= require('@playwright/test')
test('HandlingmultipleTabs',async({browser})=>{

const context = await browser.newContext()
const page = await context.newPage()
await page.goto("https://freelance-learn-automation.vercel.app/login")

// this promise will resolve a new page
const [newPageFacebook]= await Promise.all  
(
[
    context.waitForEvent('page'),
    page.locator("(//a[contains(@href,'facebook')])[1]").click()
]
)
await newPageFacebook.waitForTimeout(3000)
await newPageFacebook.locator("//input[@type='text']").fill('saif')
await newPageFacebook.waitForTimeout(3000)
await newPageFacebook.close()


const [newPageLinkedin]= await Promise.all  
(

[
    context.waitForEvent('page'),
    page.locator("(//a[contains(@href,'linkedin')])[1]").click()
]
)
await newPageLinkedin.waitForTimeout(6000)

await expect(newPageLinkedin).toHaveURL("https://www.linkedin.com/in/mukesh-otwani-93631b99/")
await newPageLinkedin.waitForTimeout(3000)
await newPageLinkedin.close()

await page.locator("//input[@id='email1']").clear()
await page.waitForTimeout(3000)

const [newPageYoutube]= await Promise.all  
(

[
    context.waitForEvent('page'),
    page.locator("(//a[contains(@href,'youtube')])[1]").click()
]
)
await newPageYoutube.waitForTimeout(3000)
await newPageYoutube.locator("")


})


