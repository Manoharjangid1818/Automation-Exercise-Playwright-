class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.checkoutBtn = page.locator(".check_out");

        this.placeOrderBtn = page.locator("text=Place Order");
    }

    async proceedToCheckout() {

        await this.checkoutBtn.click();
    }

    async placeOrder() {

        await this.placeOrderBtn.click();
    }
}

module.exports = CheckoutPage;