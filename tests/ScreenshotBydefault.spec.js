const { test, expect } = require('@playwright/test');
//screenshot : 'on' in config file
//video : 'on' in config file
test('ScreenshotByDefault in config file', async ({ page }) => {
await page.goto('https://www.demoblaze.com/index.html')
await page.click("#login2")
await page.locator("#loginusername").fill('pavanol')
await page.locator("#loginpassword").fill('test@123')
await page.click("//button[normalize-space()='Log in']")
    
    
});

    
