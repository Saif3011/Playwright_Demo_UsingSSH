const { test, expect } = require('@playwright/test');

test('Handel mouse hover action', async ({ page }) => {
await page.goto('https://demo.opencart.com/');
const desktopBtn =await page.locator("//a[normalize-space()='Desktops']")
await desktopBtn.hover()
await page.waitForTimeout(5000)
});