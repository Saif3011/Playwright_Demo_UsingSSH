const { test, expect } = require('@playwright/test');

test('HandelInnerFrames', async ({ page }) => {
  await page.goto('https://ui.vision/demo/webtest/frames/');
//PARENT FRAME
const frame3 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})
await frame3.fill("input[name='mytext3']","hello")

//NESTED FRAME  -CHILD FRAME
const childFrame=await frame3.childFrames()
await childFrame[0].locator('//*[@id="i5"]/div[3]/div').check()
await page.waitForTimeout(5000)
});