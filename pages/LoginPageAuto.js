exports.LoginPageAuto=

class LoginPageAuto {


constructor(page){
this.page= page
this.inputName = page.getByPlaceholder('Name')
this.emailField =page.getByPlaceholder('Email')
this.passwordField =page.getByPlaceholder('Password')
this.playwrightCheckBox = page.locator("//label[normalize-space()='Playwright']")
this.genderBox = page.locator("#gender1")
this.selectCity = page.locator("#state")
this.selectHobbies = page.locator("#hobbies")
this.signup = page.locator("//button[normalize-space()='Sign up']")
}

async  gotoLoginPageAuto() {
    await this.page.goto('https://freelance-learn-automation.vercel.app/signup')
}

async Login(name,email,password,city,hobbie){

await this.inputName.fill(name)
await this.emailField.fill(email)
await this.passwordField.fill(password)
await this.playwrightCheckBox.check()
await this.genderBox.check()
await this.selectCity.selectOption(city)
await this.selectHobbies.selectOption(hobbie)
await this.signup.click()
}

}