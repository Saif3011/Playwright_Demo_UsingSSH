const {test,expect} = require ('@playwright/test')

test('SoftAssertion',async ({page})=>{

await page.goto('https://www.demoblaze.com/index.html')

//HardAssertion :If a hard assert fails, It will stop the execution and rest of script will be not executed
// await expect(page).toHaveTitle('STORE1')  //failure
// await expect(page).toHaveURL('https://www.demoblaze.com/index.html') //failure
// await expect (page.locator("//a[normalize-space()='Samsung galaxy s6']")).toBeVisible(); //failure

//SoftAssertion :If a soft assert fails, the test continues to execute and all assertions are evaluated
await expect.soft(page).toHaveTitle('STORE1') //failure
await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')//continue
await expect.soft(page.locator("//a[normalize-space()='Samsung galaxy s6']")).toBeVisible(); //continue
})