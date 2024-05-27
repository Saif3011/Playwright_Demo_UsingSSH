const { test, expect } = require('@playwright/test');

test('Handel right click action', async ({ page }) => {
await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
const button =await page.locator(".context-menu-one.btn.btn-neutral")

button.click({button:'right'})

await page.on('dialog',async dialog=>{

    await dialog.accept()
})
await page.click("//span[normalize-space()='Copy']")

await page.waitForTimeout(5000)
});