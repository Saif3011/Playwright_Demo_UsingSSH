const { test, expect } = require('@playwright/test');

test('Upload file', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles("tests/FileToUpload/test1.pdf")
    await page.locator('#file-submit').click()
    const textUpload = await page.locator("//h3")
    await expect(textUpload).toHaveText('File Uploaded!')
    await page.waitForTimeout(3000)
});


