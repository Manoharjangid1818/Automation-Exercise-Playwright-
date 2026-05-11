# TODO - Playwright POM Restructure

- [ ] Inspect remaining page/utils/tests for duplicates and inline locators
- [ ] Standardize logging in tests using utils/logger.js
- [ ] Ensure the 3 required spec files exist and match required scenarios
- [ ] Update/adjust POM page objects to cover needed actions
- [ ] Update playwright.config.js for headed/slowMo/snap/video/trace/html
- [ ] Update Jenkinsfile to run Playwright tests and archive HTML report artifacts
- [ ] Delete old/unused Selenium/Java/Maven references (if present) and redundant Playwright tests
- [ ] Delete redundant/temporary artifacts folders/files (reports/snapshots/target/.classpath/.project/.settings/etc.)
- [ ] Run `npx playwright test` to ensure all tests pass
- [ ] Verify `npx playwright test --headed` visibility behavior (or config)
- [ ] Ensure framework is clean and beginner-friendly

