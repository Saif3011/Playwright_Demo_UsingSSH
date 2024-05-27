const {test,expect}= require ('@playwright/test')

test('AutoSuggestDropDown', async({page})=>{

await page.goto('https://www.redbus.in/')

await page.locator("#src").fill("Delhi")
//Wait for autosuggest options to be displayed
await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

//Capture All autosuggest element
const fromCityOptions = await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

//for looping : reading each option into this option variable
for(let option of fromCityOptions){
//Capture the text option 
const value = await option.textContent()
//Printing text in console
console.log(value);
if(value.includes("Badarpur")){

    await option.click()
    break;
}



}





await page.waitForTimeout(5000)
})