const { test, expect } = require('@playwright/test')
test('test1', async ({ page }) => {
    await page.goto("https://www.demoblaze.com/index.html")
    await expect(page).toHaveTitle('STORE')
})
test('test2', async ({ page }) => {
    await page.goto("https://demo.opencart.com/")
    await expect(page).toHaveTitle('Your Store')

})
test('test3', async ({ page }) => {
    await page.goto("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    await expect(page).toHaveTitle('Your store. Login')

})
//INSTALL ALLURE AS A  THIRD PARTY REPORT :
//1) Installation of allure playwright module : npm i -D @playwright/test allure-playwright
//2) Installing Allure command line           : npm install -g allure-commandline --save-dev
//3) Playwright.config.js                     : reporter: [['allure-playwright',{ outputFolder :'my-allure-results'}]]  OR { reporter: [["line"], ["allure-playwright"]];}
 //Or pass the same value via command line    : npx playwright test --reporter=line,allure-playwright
// Specify location for allure results:
//set ALLURE_RESULTS_DIR=my-allure-results  +  npx playwright test --reporter=line,allure-playwright

//4) Run the test          : npx playwright test tests/Reporters.spec.js
//5) Generate Allure Report: allure generate my-allure-results -o allure-report --clean
//6) Open Allure report    : allure open allure-report    