# 🛒 SauceDemo Playwright Automation

A complete end-to-end test automation framework for [saucedemo.com](https://www.saucedemo.com) 
built with **Playwright** and **Page Object Model (POM)**.

---

## 📁 Project Structure

```
saucedemo_playwright/
├── pages/
│   ├── LoginPage.js        # Login page locators & actions
│   ├── ProductPage.js      # Product page locators & actions
│   ├── CartPage.js         # Cart page locators & actions
│   └── CheckoutPage.js     # Checkout page locators & actions
├── tests/
│   ├── Login.spec.js       # Login test cases
│   ├── Product.spec.js     # Product test cases
│   ├── Cart.spec.js        # Cart test cases
│   ├── Checkout.spec.js    # Checkout test cases
│   └── e2e.spec.js         # End-to-end test
├── fixtures/
│   └── testData.js         # All test data (users, products, urls)
├── utils/
│   └── helpers.js          # Reusable helper functions
└── playwright.config.js    # Playwright configuration
```

## 🧪 Test Coverage

### 🔐 Login Tests
| Test Case | Description |
|-----------|-------------|
| Valid login | Standard user successfully logs in |
| Invalid login | Wrong credentials show error message |
| Locked user | Locked account shows error message |
| Blank username | Empty username shows error message |
| Blank password | Empty password shows error message |
| Blank all fields | Empty form shows error message |

### 🛍️ Product Tests
| Test Case | Description |
|-----------|-------------|
| Product list | All 6 products are visible |
| Add to cart | Single product added to cart |
| Cart badge | Badge count updates correctly |
| Sort A-Z | Products sorted by name A to Z |
| Sort Z-A | Products sorted by name Z to A |
| Sort price low-high | Products sorted by price low to high |
| Sort price high-low | Products sorted by price high to low |

### 🛒 Cart Tests
| Test Case | Description |
|-----------|-------------|
| Add product | Product exists in cart |
| Remove product | Product removed from cart |
| Multiple products | Multiple products added to cart |

### 💳 Checkout Tests
| Test Case | Description |
|-----------|-------------|
| Valid checkout | Order completes successfully |
| Missing first name | Error message appears |
| Missing last name | Error message appears |
| Missing zip code | Error message appears |

### 🔄 End-to-End Test
| Test Case | Description |
|-----------|-------------|
| Full flow | Login → Product → Cart → Checkout → Order Complete |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/saucedemo_playwright.git

# Go to project directory
cd saucedemo_playwright

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

---

## ▶️ Run Tests

```bash
# Run all tests
npx playwright test

# Run specific test file
npx playwright test tests/Login.spec.js

# Run in headed mode (see browser)
npx playwright test --headed

# Run in specific browser
npx playwright test --project=chromium
npx playwright test --project=firefox

# Run end-to-end test only
npx playwright test tests/e2e.spec.js

# Run with HTML report
npx playwright test --reporter=html
```

---

## 👥 Test Credentials

| User | Username | Password | Description |
|------|----------|----------|-------------|
| Standard | `standard_user` | `secret_sauce` | Normal user |
| Locked | `locked_out_user` | `secret_sauce` | Locked account |
| Problem | `problem_user` | `secret_sauce` | Buggy user |
| Invalid | `wrong_user` | `wrong_password` | Invalid credentials |

---

## 🌐 Target Website

| Property | Value |
|----------|-------|
| URL | https://www.saucedemo.com |
| Type | E-commerce demo site |
| Purpose | Playwright practice & automation |

---

## 🏗️ Architecture

```
Test File
    ↓
Page Class (POM)        ← locators & actions
    ↓
testData.js             ← users, products, urls
    ↓
helpers.js              ← reusable functions
    ↓
playwright.config.js    ← browser & timeout settings
```

---

## ⚙️ Configuration

```javascript
// playwright.config.js
{
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    baseURL: 'https://www.saucedemo.com',
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
}
```

---

## 🛠️ Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Playwright | ^1.59.1 | Browser automation |
| Node.js | v18+ | Runtime |
| JavaScript | ES Module | Language |
| Allure | ^3.7.1 | Test reporting |

---

## 📊 View Test Report

```bash
# HTML Report
npx playwright show-report

# Allure Report
npx allure generate allure-results --clean
npx allure open
```

---

## 👤 Author
Md. Emon Mia
Jr. SQA Engineer
- GitHub: https://github.com/mdemonmia/




