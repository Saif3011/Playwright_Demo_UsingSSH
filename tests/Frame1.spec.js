const {test,expect}= require('@playwright/test')
test('Frame', async ({ page }) => {
    await page.goto('https://docs.oracle.com/javase/8/docs/api/');
  
   // Total Frames
    const AllFrames = await page.frames()
console.log("Number of frames :" , AllFrames.length);
//Approach1 : using name or url 

//await page.frame("name") if name is available
const frame1 = await page.frame({name:"packageListFrame"}) //locate the iframe by name
await frame1.click("//a[normalize-space()='java.applet']") // from this iframe we can click on this button

//Approach2 : Using Framelocator

// const frame = await page.frameLocator("//frame[@name='packageListFrame']")

// await frame.locator("//a[normalize-space()='java.applet']").click()


await page.waitForTimeout(5000)
  });
