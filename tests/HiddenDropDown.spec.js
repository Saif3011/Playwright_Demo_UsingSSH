const {test,expect}= require ('@playwright/test')

test('AutoSuggestDropDown', async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await page.fill("//input[@placeholder='Username']","Admin")
await page.fill("//input[@placeholder='Password']","admin123")
await page.click("//button[@type='submit']")

await page.click("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='PIM']")

await page.click('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[6]/div/div[2]/div/div/div[2]/i')

await page.waitForSelector("//div[@role='listbox']//span")

const jobs =await page.$$("//div[@role='listbox']//span")
for(let job of jobs){
const jobName= await job.textContent()
console.log(jobName);
if(jobName.includes('Chief Technical Officer')){
    await job.click()
    break;
}

}


await page.waitForTimeout(5000)
})