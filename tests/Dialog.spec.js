const {test, expect} = require ('@playwright/test')
test('Alert with Ok',async({page})=>{
await page.goto('https://testautomationpractice.blogspot.com/')  
//Enabling Dialog window  handler
await page.on('dialog',async dialog =>{
  //assertion type of alert  
expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept()

})
//Once you enable dialog window handler , then you have to trigger the event
await page.locator("button[onclick='myFunctionAlert()']").click();
await page.waitForTimeout(5000);
});

test('Confirmation dialog',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')  
    //Enabling Dialog window  handler
    await page.on('dialog',async dialog =>{
      //assertion type of alert  
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    //await dialog.accept() close by using ok
    await dialog.dismiss()  //close by using cancel
    
    })
    //Once you enable dialog window handler , then you have to trigger the event
    await page.locator("button[onclick='myFunctionConfirm()']").click();
    await expect(page.locator("#demo")).toHaveText('You pressed Cancel!')
    await page.waitForTimeout(5000);
    })

    test('Prompt dialog',async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')  
        //Enabling Dialog window  handler
        await page.on('dialog',async dialog =>{
          //assertion type of alert  
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept("Saif Allah Dakhlaoui") 
        
        })
        //Once you enable dialog window handler , then you have to trigger the event
        await page.locator("button[onclick='myFunctionPrompt()']").click();
        await expect(page.locator("#demo")).toHaveText('Hello Saif Allah Dakhlaoui! How are you today?')
        await page.waitForTimeout(5000);
        })


