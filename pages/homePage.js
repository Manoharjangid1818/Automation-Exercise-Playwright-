class HomePage {

    constructor(page) {

        this.page = page;

        this.signupLoginBtn = page.locator('a[href="/login"]');
        this.productsBtn = page.locator('a[href="/products"]');
        this.cartBtn = page.locator('a[href="/view_cart"]');
    }

    async openWebsite(url) {

        await this.page.goto(url);
    }

    async clickSignupLogin() {

        await this.signupLoginBtn.click();
    }

    async clickProducts() {

        await this.productsBtn.click();
    }

    async clickCart() {

        await this.cartBtn.click();
    }
}

module.exports = HomePage;