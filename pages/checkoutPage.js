class CheckoutPage {

    constructor(page) {

        this.page = page;

        this.checkoutBtn = page.locator(".check_out");

        this.placeOrderBtn = page.locator("text=Place Order");

        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvcInput = page.getByRole('textbox', { name: 'ex.' });
        this.expiryMonthInput = page.getByRole('textbox', { name: 'MM' });
        this.expiryYearInput = page.getByRole('textbox', { name: 'YYYY' });
        this.payConfirmBtn = page.getByRole('button', { name: 'Pay and Confirm Order' });
    }

    async proceedToCheckout() {

        await this.checkoutBtn.click();
    }

    async placeOrder() {

        await this.placeOrderBtn.click();
    }

    async fillCardDetails(cardName, cardNumber, cvc, month, year) {

        await this.nameOnCardInput.click();
        await this.nameOnCardInput.fill(cardName);

        await this.cardNumberInput.click();
        await this.cardNumberInput.fill(cardNumber);

        await this.cvcInput.click();
        await this.cvcInput.fill(cvc);

        await this.expiryMonthInput.click();
        await this.expiryMonthInput.fill(month);

        await this.expiryYearInput.click();
        await this.expiryYearInput.fill(year);

        await this.payConfirmBtn.click();
    }
}

module.exports = CheckoutPage;