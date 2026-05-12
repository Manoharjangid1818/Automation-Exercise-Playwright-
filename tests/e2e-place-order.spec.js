const { test, expect } = require('@playwright/test');

const HomePage = require('../pages/homePage');
const SignupPage = require('../pages/signupPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');
const CheckoutPage = require('../pages/checkoutPage');

const Logger = require('../utils/logger');
const testData = require('../utils/testData');

test('E2E Place Order Flow', async ({ page }) => {

    Logger.startTest('E2E PLACE ORDER FLOW');

    const homePage = new HomePage(page);
    const signupPage = new SignupPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);

    Logger.step('Opening Homepage');

    await homePage.openWebsite(testData.baseUrl);

    await page.waitForTimeout(2000);

    Logger.step('Opening Signup Page');

    await homePage.clickSignupLogin();

    const randomEmail = `manohar${Date.now()}@gmail.com`;

    Logger.step('Creating New Account');

    await signupPage.signup(
        testData.user.name,
        randomEmail,
        testData.user.password
    );

    await page.waitForTimeout(3000);

    await expect(
        page.locator('body')
    ).toContainText('Account Created');

    Logger.step('Opening Products Page');

    await homePage.clickProducts();

    Logger.step('Searching Product');

    await productPage.searchProduct(testData.product.name);

    Logger.step('Adding Product To Cart');

    await productPage.addFirstProductToCart();

    Logger.step('Opening Cart');

    await productPage.goToCart();

    Logger.step('Verifying Product Added');

    await expect(
        page.locator('body')
    ).toContainText(testData.product.name);

    Logger.step('Proceeding To Checkout');

    await cartPage.proceedToCheckout();

    Logger.step('Placing Order');

    await checkoutPage.placeOrder();

    Logger.step('Filling Card Details');

    await checkoutPage.fillCardDetails('Manohar', '7747747746663', '311', '12', '2030');

    await page.waitForTimeout(2000);

    await expect(
        page.locator('body')
    ).toContainText('Order Placed!');

    Logger.success('Order Placed Successfully');

    Logger.completed();
});