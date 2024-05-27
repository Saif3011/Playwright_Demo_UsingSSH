const { test, expect } = require('@playwright/test');

test('Drag And Drop Action', async ({ page }) => {
  await page.goto('https://demoqa.com/droppable');

  const source =await page.locator("//div[@id='draggable']")
  const target = await page.locator("//div[@id='simpleDropContainer']//div[@id='droppable']")
  //source.dragTo(target)
await source.hover()
await page.mouse.down()
await target.hover()
await page.mouse.up()

await page.waitForTimeout(4000)
});