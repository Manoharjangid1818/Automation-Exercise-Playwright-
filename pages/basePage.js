/**
 * BasePage - reusable Playwright helper methods.
 * Mirrors the intent of the Selenium BasePage.
 */

class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Extra slow for visibility (in addition to Playwright slowMo).
   */
  async slow(ms = 800) {
    await this.page.waitForTimeout(ms);
  }

  /**
   * Click a locator.
   * @param {import('@playwright/test').Locator} locator
   */
  async click(locator) {
    await this.slow();
    await locator.click();
  }

  /**
   * Type into a locator (fill).
   * @param {import('@playwright/test').Locator} locator
   * @param {string} text
   */
  async type(locator, text) {
    await this.slow();
    await locator.fill(text);
  }

  /**
   * Hover a locator.
   * @param {import('@playwright/test').Locator} locator
   */
  async hover(locator) {
    await this.slow();
    await locator.hover();
  }

  /**
   * Wait until locator is visible.
   * @param {import('@playwright/test').Locator} locator
   */
  async waitVisible(locator) {
    await locator.waitFor({ state: 'visible' });
  }
}

module.exports = { BasePage };

