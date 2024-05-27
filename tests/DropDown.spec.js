const {test,expect} = require ('@playwright/test')

test('DropDown',async ({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')

await page.locator('#country').selectOption({value:'germany'})
await page.waitForTimeout(5000)
await page.locator('#country').selectOption("India")
await page.waitForTimeout(5000)
});

test('DropDown Assertion',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    // //Approach 1: check number of dropDown
    //  const option = await page.locator('#country option')
    //  await expect(option).toHaveCount(10)


    // //Approach 2: check number of dropDown
    // const opt = await page.$$('#country option')
    // await expect(opt.length).toBe(10)
    //Approach 3: check presence of value in dropDown

    const country = await page.$$('#country option')
    let status = false;
    for(const option of country){

//console.log(await option.textContent());
let value = await option.textContent()
// if(value.includes('France')){

//     console.log("France is present");
//     status = true;
//     break;
// }
if(value.includes('France')){

    await page.selectOption("#country",value)
}


    }


    
    await page.waitForTimeout(5000)
    })