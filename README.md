# Automation Exercise - Playwright Framework

A clean, professional **Page Object Model (POM)** automation framework built with **Playwright** and **JavaScript** for testing the Automation Exercise website.

## 📋 Framework Overview

This framework follows best practices for test automation:
- ✅ **Page Object Model (POM)** architecture for maintainability
- ✅ **Async/await** pattern throughout
- ✅ **Comprehensive logging** for visibility
- ✅ **Slow execution mode** for clear browser action visibility
- ✅ **Playwright reports** with screenshots and videos on failure
- ✅ **Jenkins integration** ready
- ✅ **Production-ready** and beginner-friendly

## 📁 Project Structure

```
automation-exercise-playwright/
├── pages/                          # Page Object Model classes
│   ├── basePage.js                # Base class with reusable methods
│   ├── homePage.js                # Homepage interactions
│   ├── loginPage.js               # Login page interactions
│   ├── signupPage.js              # Signup page interactions
│   ├── productPage.js             # Product search and add to cart
│   ├── cartPage.js                # Cart management
│   └── checkoutPage.js            # Checkout flow
├── tests/                          # Test specifications
│   ├── signup.spec.js             # User registration test
│   ├── login.spec.js              # Login test
│   ├── signin.spec.js             # Alternative sign-in test
│   ├── search-product.spec.js     # Product search test
│   ├── cart.spec.js               # Cart management test
│   ├── cart-management.spec.js    # Advanced cart test
│   └── e2e-place-order.spec.js    # End-to-end order flow
├── utils/                          # Utilities and helpers
│   ├── logger.js                  # Centralized logging
│   ├── testData.js                # Test data and constants
│   └── testUserStore.js           # Credential management
├── reports/                        # Test reports (auto-generated)
├── test-results/                  # Test results and artifacts
├── playwright.config.js           # Playwright configuration
├── package.json                   # Dependencies and scripts
├── Jenkinsfile                    # CI/CD pipeline
└── README.md                      # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Manoharjangid1818/Automation-Exercise-Playwright-.git
   cd Automation-Exercise-Playwright-
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (visible browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/login.spec.js
```

### Run tests with UI mode (interactive)
```bash
npx playwright test --ui
```

### Debug tests
```bash
PWDEBUG=1 npx playwright test --ui
```

## 📊 Test Reports

### View HTML Report
```bash
npx playwright show-report
```

The HTML report includes:
- ✅ Test results with status
- 📸 Screenshots on failure
- 🎥 Video recordings
- 🔍 Trace files for debugging

### Report Location
```
reports/playwright-html-report/index.html
```

## 📝 Test Scenarios

### 1. **Signup Test** (`tests/signup.spec.js`)
- Creates a new user account
- Saves credentials for other tests
- **Run:** `npx playwright test tests/signup.spec.js`

### 2. **Login Test** (`tests/login.spec.js`)
- Uses previously saved credentials
- Verifies successful login
- **Run:** `npx playwright test tests/login.spec.js`

### 3. **Product Search Test** (`tests/search-product.spec.js`)
- Logs in as existing user
- Searches for products
- Verifies search results display
- **Run:** `npx playwright test tests/search-product.spec.js`

### 4. **Cart Management Test** (`tests/cart-management.spec.js`)
- Logs in to account
- Adds product to cart
- Verifies quantity
- Removes product
- Verifies cart is empty
- **Run:** `npx playwright test tests/cart-management.spec.js`

### 5. **End-to-End Order Flow** (`tests/e2e-place-order.spec.js`)
- **Complete flow:**
  - Opens homepage
  - Signup with new user
  - Login successfully
  - Search product
  - Add product to cart
  - Verify product added
  - Proceed to checkout
  - Place order
  - Verify successful order placement
- **Run:** `npx playwright test tests/e2e-place-order.spec.js`

## 📋 Console Logging

Tests provide clear visibility with comprehensive logging:

```
=====================================
STARTING TEST: test title
=====================================

[STEP] Opening Homepage
[STEP] Navigating to Login
[STEP] Logging Into Application
[SUCCESS] Login successful
...
=====================================
TEST COMPLETED SUCCESSFULLY
=====================================
```

### Log Levels
- `[STEP]` - Current action being performed
- `[SUCCESS]` - Successfully completed action
- `[WARNING]` - Non-critical issues
- `[FAILED]` - Error occurred

## 🔧 Configuration

### Playwright Config (`playwright.config.js`)

Key configurations:
- **Headed Mode:** `headless: false` - Browser visible during execution
- **Slow Motion:** `slowMo: 500` - 500ms delay between actions
- **Screenshots:** Captured on failure
- **Video:** Recorded for all tests
- **Trace:** Retained on failure
- **Timeouts:** 60 seconds per test
- **Retries:** 2 retries for flaky tests

### Test Data (`utils/testData.js`)

Centralized test data:
- Base URL
- Product names
- Default passwords
- User address data
- Timeout configurations

## 📄 Page Object Model (POM)

Each page has a dedicated class with:
- **Locators** defined at class level
- **Methods** for user interactions
- **Waits** for element visibility
- **Reusable actions** across tests

### Example: HomePage
```javascript
class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.productsButton = page.locator("//a[@href='/products']");
  }

  async clickProducts() {
    await this.productsButton.waitFor({ state: 'visible' });
    await this.click(this.productsButton);
  }
}
```

## 🔐 Authentication

### Credential Management

The framework uses `utils/testUserStore.js` to:
1. Save user credentials after signup
2. Reuse credentials in other tests
3. Support dependent test execution

**File:** `.auth-test-user.json` (auto-created)

## 📊 Execution Order

For best results, run tests in this order:
1. `signup.spec.js` - Creates user and saves credentials
2. `login.spec.js` - Tests login with saved credentials
3. Other tests - Use saved credentials

Or run all tests:
```bash
npx playwright test
```

## 🏗️ Jenkins Integration

### Pipeline Stages
1. **Clone Repository** - Get latest code
2. **Install Dependencies** - npm install
3. **Install Browsers** - npx playwright install
4. **Run Tests** - npx playwright test
5. **Archive Artifacts** - Reports and screenshots

### Run in Jenkins
```groovy
// Jenkins automatically executes the Jenkinsfile
// Reports available under: reports/playwright-html-report/
```

### View Reports in Jenkins
1. Go to job
2. Click "Playwright HTML Report"
3. View detailed results

## 🐛 Troubleshooting

### Tests fail with "No saved credentials"
**Solution:** Run `tests/signup.spec.js` first to create credentials

### Browser not visible
**Solution:** Make sure config has `headless: false`

### Timeouts
**Solution:** Check internet connection and increase timeouts in `testData.js`

### Port already in use
**Solution:** Kill existing Playwright processes or wait a moment

## 📖 Best Practices

1. **Always run signup test first** - Other tests depend on saved credentials
2. **Check console logs** - They show exactly what the test is doing
3. **Review HTML reports** - Failures include screenshots and videos
4. **Use meaningful test names** - Should describe what is being tested
5. **Keep page objects clean** - One purpose per method

## 🔄 Test Data Flow

```
Signup Test
    ↓ (saves .auth-test-user.json)
Login Test, Search Test, Cart Test
    ↓ (uses saved credentials)
E2E Test (standalone)
```

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev/)
- [Page Object Model Pattern](https://playwright.dev/docs/pom)
- [Automation Exercise Website](https://automationexercise.com/)

## ✨ Key Features

✅ Modern Playwright best practices  
✅ Clean, maintainable code  
✅ Comprehensive logging and visibility  
✅ Production-ready framework  
✅ Jenkins CI/CD ready  
✅ Beginner-friendly documentation  
✅ Slow execution for clear visibility  
✅ Automatic screenshots and videos on failure  

## 🤝 Contributing

To add new tests:
1. Create page object if needed in `pages/`
2. Create test file in `tests/`
3. Use existing page objects
4. Follow logging patterns
5. Test manually before committing

## 📝 License

This project is open source and available under MIT License.

---

Added Webhook

**Happy Testing! 🎉**
