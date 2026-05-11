class LoginPage {

    constructor(page) {

        this.page = page;

        this.signupLoginBtn = page.locator('a[href="/login"]');

        this.emailInput = page.locator('input[data-qa="login-email"]');

        this.passwordInput = page.locator('input[data-qa="login-password"]');

        this.loginButton = page.locator('button[data-qa="login-button"]');
    }

    async login(email, password) {

        await this.signupLoginBtn.click();

        await this.page.waitForTimeout(1000);

        await this.emailInput.fill(email);

        await this.passwordInput.fill(password);

        await this.loginButton.click();

        await this.page.waitForTimeout(2000);
    }
}

module.exports = LoginPage;