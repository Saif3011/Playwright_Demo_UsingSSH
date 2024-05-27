const {test,expect}= require('@playwright/test')
test('DropDown Test ',async({page})=>{

await page.goto('https://freelance-learn-automation.vercel.app/signup')
await page.locator('#state').selectOption({value:"Bihar"})
await page.waitForTimeout(2000)
await page.locator('#state').selectOption({index:5})
await page.waitForTimeout(2000)
const value = await page.locator('#state').textContent() 
console.log("All dropdown values  :"+value);
await expect(value.includes("Delhi")).toBeTruthy()
await page.waitForTimeout(3000)
})

test('DropDown Test using forloop ',async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/signup')
    await page.locator('#state').selectOption({value:"Bihar"})
    await page.waitForTimeout(3000)
    let state = await page.$("#state")
    let allElements =await state.$$('option') // array of string
    let DropDownStatus = false
    for (let i = 0; i < allElements.length; i++) {

        let element = allElements[i]; // capture th first element
        const value = await element.textContent() //capture the text
        console.log(value);
      if (value.includes("Goa")) {
        await state.selectOption(value)
        DropDownStatus = true
        break
      }
      console.log("All dropdown values  :"+value);
      
    }
    await expect(DropDownStatus).toBeTruthy() 
//     for(const option of city){
    
//    const value = await option.textContent()
//    console.log(value);
//    if(value.includes("Kerala")){
    
//     await page.selectOption("#state",value)

// }
//     }


    await page.waitForTimeout(5000)
    })
    


