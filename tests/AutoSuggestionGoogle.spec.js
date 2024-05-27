const {test,expect}= require ('@playwright/test')

test('AutoSuggestDropDown Using Forloop', async({page})=>{

await page.goto('https://www.google.com/')

await page.locator('textarea[name="q"]').fill('mukesh otwani')
await page.waitForSelector("//li[contains(@class,'sbct PZPZlf')]")
let options =await page.$$("//li[contains(@class,'sbct PZPZlf')]")
for(let option of options){
 let value = await option.textContent()
 if (value.includes('youtube')) {
    await option.click()
    break
 }

}
await page.waitForTimeout(5000)
})
test('AutoSuggestDropDown using Keyboard', async({page})=>{
//Using keyboard Actions
    await page.goto('https://www.google.com/')
    await page.locator('textarea[name="q"]').fill('mukesh otwani')
    await page.waitForSelector("//li[contains(@class,'sbct PZPZlf')]")
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('Enter')
    
    await page.waitForTimeout(5000)
    })