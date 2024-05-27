
const { test, expect } = require('@playwright/test');

test('Keyboard Actions', async ({ page }) => {
    await page.goto('https://gotranscript.com/text-compare');
    await page.type("//textarea[@name='text1']", "Automation test")
    // Ctrl+A -SELECT
    await page.keyboard.press('Control+A') //keyboard.press USED WITH MULTIPLE KEYS
    //Ctrl+C  - COPY
    await page.keyboard.press('Control+C')
    //Tab 
    await page.keyboard.down('Tab') //keyboard.down USED WITH SINGLE KEY
    await page.keyboard.up('Tab') // YOU DON'T NEED TO PROVIDE THIS 
    //Ctrl+V -PASTE
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(4000)
});
