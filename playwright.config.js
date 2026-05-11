const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({

    testDir: './tests',

    outputDir: 'test-results',

    timeout: 60000,

    fullyParallel: false,

    reporter: [
        ['html']
    ],

    use: {

        browserName: 'chromium',

        headless: false,

        slowMo: 1000,

        viewport: {
            width: 1400,
            height: 900
        },

        screenshot: 'only-on-failure',

        video: 'retain-on-failure',

        trace: 'retain-on-failure'
    }
});