exports.LoginPage=

class LoginPage {

constructor(page){
//contain: Attribute and Elements
 //when we would to change Attribute or Elements , we change it in constructor not in methods or test cases
this.page = page ;
this.loginLink = page.locator("#login2")
this.username =page.locator("#loginusername")
this.password =page.locator("#loginpassword")
this.clickBtn=page.locator("//button[normalize-space()='Log in']")
}
async gotoLoginPage(){
    await this.page.goto('https://www.demoblaze.com/index.html')
}
async login(Username,Password){
await this.loginLink.click()
await this.username.fill(Username)
await this.password.fill(Password)
await this.clickBtn.click()

}
}