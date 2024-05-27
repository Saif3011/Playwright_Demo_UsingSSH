const { test, expect } = require('@playwright/test');

test('Screenshot', async ({ page }) => {
    await page.goto('https://www.opencart.com/');
    await page.screenshot({path:'tests/ScreenShots/'+Date.now()+'homepage.png'})
    
});
test('ScreenshotAllPage', async ({ page }) => {
    await page.goto('https://www.opencart.com/');
    
    await page.screenshot({path:'tests/ScreenShots/'+Date.now()+'Fullpage.png',fullpage:true}) 
});
test('Element Screenshot', async ({ page }) => {
    await page.goto('https://www.opencart.com/');
    await page.locator("//a[@class='btn btn-success btn-xl']").screenshot({path:'tests/ScreenShots/'+'element.png'})
    
});