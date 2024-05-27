const { test, expect } = require('@playwright/test')
test('Date Picker', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1) Fill date directly
    //await page.fill("#datepicker","31/12/2023")
    //2) Date Picker
    const year = "2024"
    const month = "April"
    const day = "1"
    await page.click("#datepicker") //Open calendar

    while (true) {
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        //condition : Tant que l'expression logique est vraie,
        if (currentMonth == month && currentYear == year) {
            // effectue les instructions suivantes
            break;
        }
        //Tant que non, cliquer sur next
        await page.click(".ui-icon.ui-icon-circle-triangle-e") // click next

    }
    //Select Date : with loop
    
    //Capturing days
    // const days = await page.$$("//a[@class='ui-state-default']")

    // //Date selection using loop
    // for (const Currentday of days) {
    //     if (await Currentday.textContent() == day) {
    //         await Currentday.click()
    //         break;
    //     }

    // }
//Select Date : without loop + parametrize day
await page.click(`//a[@class='ui-state-default'][text()='${day}']`)

    await page.waitForTimeout(5000);
});
/**La boucle while est une boucle, donc elle permet de répéter des instructions comme la boucle for. Non pas à partir d'un intervalle, mais à partir d'une condition comme l'instruction if. On peut le lire comme "Tant que l'expression logique est vraie, effectue les instructions suivantes". */