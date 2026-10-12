exports.loginpage = class loginpage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.locator('#username')
        this.password_textbox = page.locator('#password')
        this.login_button = page.locator('#submit')
    }

    async gotologinpage() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/')

    }

    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()

    }

}