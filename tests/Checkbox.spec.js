const { test, expect } = require('@playwright/test')

test('Perform Single Checkbox', async ({ page }) => {
    //Single checkbox
    await page.goto('https://demoqa.com/checkbox')
    const elt = await page.locator("//label[@for='tree-node-home']//span[@class='rct-checkbox']//*[name()='svg']").check();
    expect(await page.locator("//label[@for='tree-node-home']//span[@class='rct-checkbox']//*[name()='svg']")).toBeChecked()

});


test('Perform multiple Checkbox ', async ({ page }) => {
    //multiple checkbox
    await page.goto('https://demoqa.com/checkbox')
    await page.click("//button[@title='Toggle']//*[name()='svg']")

    const checkboxLocator =
        ["//label[@for='tree-node-documents']//span[@class='rct-checkbox']//*[name()='svg']",
            "//label[@for='tree-node-downloads']//span[@class='rct-checkbox']//*[name()='svg']"
        ]
    for (const locat of checkboxLocator) { // select multiple checkboxes

        await page.locator(locat).check();
    }
    for (const locat of checkboxLocator) {  // unselect multiple checkboxes wich are already selected
        // make condition
        if (await page.locator(locat).isChecked) {
            await page.locator(locat).uncheck();
        }

    }
    await page.waitForTimeout(6000);
})