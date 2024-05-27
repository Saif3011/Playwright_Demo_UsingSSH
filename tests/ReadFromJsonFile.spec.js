const { test, expect } = require('@playwright/test')
const testLogin = JSON.parse(JSON.stringify(require('../TestLogin.json')))

test.describe("Data Driver login test", function () {

    for (let data of testLogin)
    {
        test.describe(`login with user ${data.id}`, function () 
        {

            test('Read from Json File ', async ({ page }) => 
            {

                await page.goto("https://freelance-learn-automation.vercel.app/signup")
                await page.locator("//input[@id='name']").fill(data.username)
                await page.locator('#email').clear()
                await page.locator('#email').fill(data.email)

                await page.waitForTimeout(3000)
            })



        })
    }



})
