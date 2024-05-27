const {test,expect}= require('@playwright/test')
test('Frame', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
  
    //Total Frames
//     const AllFrames = await page.frames()
// console.log("Number of frames :" , AllFrames.length);
//Approach1 : using name or url 
//await page.frame("name") if name is available
// const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})
// await frame1.fill("input[name='mytext1']","hello world")

//Approach2 : Using Framelocator

const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")

inputBox.fill('hello')


await page.waitForTimeout(5000)
  });
