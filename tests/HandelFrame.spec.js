const { test, expect } = require('@playwright/test');

test('Frame', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
//All frames
const allframes = await page.frames()
console.log("Number of frames :",allframes.length);
// Approach 1 : Using Name or url
//await page.frame('name')
const frame1 =await  page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" });
await frame1.fill("input[name='mytext1']",'saiko')
await page.waitForTimeout(5000)

//Approach 2 : Using frame locator
const inputBox= await page.frameLocator("frame[src='frame_1.html']").locator("input[name='mytext1']")
await inputBox.fill("input[name='mytext1']")

});