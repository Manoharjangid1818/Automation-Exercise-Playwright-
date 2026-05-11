const { test, expect } = require('@playwright/test');

const LoginPage = require('../pages/loginPage');
const ProductPage = require('../pages/productPage');

const Logger = require('../utils/logger');
const testData = require('../utils/testData');

test('Search Product Flow', async ({ page }) => {

    Logger.startTest('SEARCH PRODUCT FLOW');

    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    Logger.step('Opening Website');

    await page.goto(testData.baseUrl);

    await page.waitForTimeout(2000);

    Logger.step('Logging Into Application');

    await loginPage.login(
        testData.user.email,
        testData.user.password
    );

    Logger.step('Opening Products Page');

    await page.click('a[href="/products"]');

    Logger.step('Searching Product');

    await productPage.searchProduct(testData.product.name);

    Logger.step('Verifying Product');

    await expect(
        page.locator('body')
    ).toContainText(testData.product.name);

    Logger.success('Search Product Flow Completed');

    Logger.completed();
});