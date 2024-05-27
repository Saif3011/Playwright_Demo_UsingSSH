const { test, expect } = require('@playwright/test');

test('Upload file', async ({ page }) => {
    await page.goto('https://www.foundit.in/');
   //Upload one file
   //wait for element to be charged
await page.waitForSelector("//i[@class='mqfihd-upload']")
//Click on UploadBtn
await page.locator("//i[@class='mqfihd-upload']").click()
await page.locator("#file-upload").setInputFiles('tests/FileToUpload/test1.pdf')

await page.waitForTimeout(7000)
});
test('Upload multiplefile', async ({ page }) => {
    await page.goto('https://davidwalsh.name/demo/multiple-file-upload.php');
    //Files sould be into Array
    await page.locator("//input[@id='filesToUpload']").setInputFiles(['tests/FileToUpload/test2.pdf','tests/FileToUpload/test1.pdf'])
    // //Assertion : files are uploaded
    expect(await page.locator("#fileList li:nth-child(1)")).toHaveText("test2.pdf")
    expect(await page.locator("#fileList li:nth-child(2)")).toHaveText("test1.pdf")
    //Removing Files
    await page.locator("//input[@id='filesToUpload']").setInputFiles([])
    expect(await page.locator("#fileList li")).toHaveText("No Files Selected")




    await page.waitForTimeout(6000)

});