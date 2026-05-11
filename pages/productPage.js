class ProductPage {

    constructor(page) {

        this.page = page;

        this.searchInput = page.locator('#search_product');

        this.searchButton = page.locator('#submit_search');

        this.firstAddToCart = page.locator('(//a[contains(text(),"Add to cart")])[1]');

        this.viewCartButton = page.locator('text=View Cart');
    }

    async searchProduct(productName) {

        await this.searchInput.waitFor({ state: 'visible', timeout: 30000 });

        await this.searchInput.fill('');
        await this.searchInput.fill(productName);

        await this.searchButton.click();

        await this.page.waitForTimeout(2000);
    }

    async addFirstProductToCart() {

        await this.firstAddToCart.first().click();

        await this.page.waitForTimeout(2000);
    }

    async goToCart() {

        await this.viewCartButton.click();

        await this.page.waitForTimeout(2000);
    }
}

module.exports = ProductPage;