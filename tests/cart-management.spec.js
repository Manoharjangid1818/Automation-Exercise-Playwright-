const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');
const CartPage = require('../pages/cartPage');

const Logger = require('../utils/logger');
const testData = require('../utils/testData');

test('Cart Management Flow', async ({ page }) => {

    Logger.startTest('CART MANAGEMENT FLOW');

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    // Defensive: ensure we're not using a disposed/closed page from previous runs.
    if (page.isClosed()) throw new Error('Playwright page was closed unexpectedly');


    Logger.step('Opening Website');

    await page.goto(testData.baseUrl, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(1000);

    Logger.step('Logging Into Application');

    await loginPage.login(
        testData.user.email,
        testData.user.password
    );

    Logger.step('Searching Product');

    // Go to Products page (cart-management previously assumed we're already there).
    await page.click('a[href="/products"]');
    await page.waitForSelector('#search_product', { state: 'visible', timeout: 30000 });

    await productPage.searchProduct(testData.product.name);

    Logger.step('Adding Product To Cart');

    await productPage.addFirstProductToCart();

    Logger.step('Opening Cart');

    await productPage.goToCart();

    Logger.step('Removing Product');

    await cartPage.removeProduct();

    Logger.step('Verifying Empty Cart');

    await expect(
        page.locator('body')
    ).toContainText('Cart is empty');

    Logger.success('Cart Management Flow Completed');

    Logger.completed();
});