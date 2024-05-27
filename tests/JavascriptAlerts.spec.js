const { test, expect } = require('@playwright/test')

test('Handling Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am a JS Alert')
        await dialog.accept()
    })
    await page.locator("//button[@onclick='jsAlert()']").click()
    await page.waitForTimeout(3000)
})
test('Handling confirm', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')
    page.on("dialog", async (dialog) => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('I am a JS Confirm')
        await dialog.accept()
        expect(await page.locator("//p[text()='You clicked: Ok']")).toHaveText('You clicked: Ok')

    })
    await page.locator("//button[text()='Click for JS Confirm']").click()
    await page.waitForTimeout(3000)
})