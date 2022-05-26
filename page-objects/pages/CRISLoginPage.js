import { Selector, t } from 'testcafe'

class CRISLoginPage {
    constructor() {
        this.usernameInput = Selector ('input[name="loginfmt"]')
        this.passwordInput = Selector ('input[name="passwd"]')
        this.nextButton = Selector('#idSIButton9')
        this.signInButton = Selector ('.ext-button.primary.ext-primary')
    }

    async login(username, password) {
        await t
            .typeText(this.usernameInput, username, { paste: true, replace: true })
            .click(this.nextButton)
            .typeText(this.passwordInput, password, { paste: true, replace: true })
            .click(this.signInButton)
    }
}

export default CRISLoginPage
