const { test, expect } = require('@playwright/test');

test('Date Picker ToolQA', async ({ page }) => {
  await page.goto('https://demoqa.com/date-picker');

  await page.click("#datePickerMonthYearInput")

//   await page.locator(".react-datepicker__month-select").selectOption("November")
//   await page.locator(".react-datepicker__year-select").selectOption("1987")
//   await page.click("//div[@class='react-datepicker__day react-datepicker__day--017']")
//   await page.waitForTimeout(5000)

const monthAndYear = "January 2024"
const date ="17"
while(true){
const currentMonthAndYear =await page.locator("//div[@class='react-datepicker__current-month react-datepicker__current-month--hasYearDropdown react-datepicker__current-month--hasMonthDropdown']").textContent()
    if(currentMonthAndYear==monthAndYear){

        break;
    }
    await page.click("button[aria-label='Previous Month']")
}
await page.click(`//div[@class='react-datepicker__day react-datepicker__day--0${date}']`)

await page.waitForTimeout(5000)


});