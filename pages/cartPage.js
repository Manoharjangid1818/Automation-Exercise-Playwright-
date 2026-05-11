class CartPage {

    constructor(page) {

        this.page = page;

        this.proceedToCheckoutButton =
            page.locator('text=Proceed To Checkout');

        this.removeButton =
            page.locator('.cart_quantity_delete');
    }

    async proceedToCheckout() {

        await this.proceedToCheckoutButton.click();

        await this.page.waitForTimeout(2000);
    }

    async removeProduct() {

        await this.removeButton.click();

        await this.page.waitForTimeout(2000);
    }
}

module.exports = CartPage;