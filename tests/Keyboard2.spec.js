
const { test, expect } = require('@playwright/test');

test('Keyboard Actions 2', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.locator('textarea[name="q"]').focus()
    await page.keyboard.type("Saif Dakhlaoui!")
    await page.locator('textarea[name="q"]').click()
    await page.waitForTimeout(3000)
    // await page.keyboard.press('Control+A')
    // await page.keyboard.press('Control+C')
    // await page.keyboard.press('Backspace')
    // await page.waitForTimeout(3000)
    // await page.keyboard.press('Control+V')
    await page.keyboard.press('ArrowLeft')
    await page.keyboard.down('Shift')
    for (let i = 0; i < 'Dakhlaoui!'.length; i++) {
        await page.keyboard.down('Shift')
        await page.keyboard.press('Backspace')
    }
    await page.keyboard.up('Shift')
    await page.waitForTimeout(3000)
});
