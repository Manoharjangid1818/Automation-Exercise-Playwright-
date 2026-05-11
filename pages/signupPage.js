class SignupPage {

    constructor(page) {

        this.page = page;

        this.nameInput = page.locator('input[data-qa="signup-name"]');

        this.emailInput = page.locator('input[data-qa="signup-email"]');

        this.signupButton = page.locator('button[data-qa="signup-button"]');

        this.passwordInput = page.locator('#password');

        this.daySelect = page.locator('#days');

        this.monthSelect = page.locator('#months');

        this.yearSelect = page.locator('#years');

        this.firstName = page.locator('#first_name');

        this.lastName = page.locator('#last_name');

        this.address = page.locator('#address1');

        this.country = page.locator('#country');

        this.state = page.locator('#state');

        this.city = page.locator('#city');

        this.zipcode = page.locator('#zipcode');

        this.mobileNumber = page.locator('#mobile_number');

        this.createAccountButton = page.locator('button[data-qa="create-account"]');
    }

    async signup(name, email, password) {

        await this.nameInput.fill(name);

        await this.emailInput.fill(email);

        await this.signupButton.click();

        await this.page.waitForTimeout(2000);

        await this.passwordInput.fill(password);

        await this.daySelect.selectOption('1');

        await this.monthSelect.selectOption('1');

        await this.yearSelect.selectOption('2000');

        await this.firstName.fill('Manohar');

        await this.lastName.fill('Jangid');

        await this.address.fill('Ahmedabad');

        await this.country.selectOption('India');

        await this.state.fill('Gujarat');

        await this.city.fill('Ahmedabad');

        await this.zipcode.fill('380001');

        await this.mobileNumber.fill('9876543210');

        await this.createAccountButton.click();

        await this.page.waitForTimeout(3000);
    }
}

module.exports = SignupPage;