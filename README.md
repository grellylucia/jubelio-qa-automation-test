# Jubelio QA Automation Project (Cypress) 🚀

## 📌 Project Overview

This project is a **Cypress-based automation testing framework** for the **Penjualan (Sales) features** of Jubelio. It includes automated tests for:

- ✅ **Create and Edit Pesanan (Orders)**
- ✅ **Search Pesanan (Orders)**

---

## 🛠️ Tech Stack

- **Test Framework:** Cypress
- **Assertions:** Mocha & Chai

---

## 📂 Project Structure

```
📦 jubelio-qa-automation-test
│── 📂 cypress
│   ├── 📂 data               # Stores test data files
│   ├── 📂 downloads          # Stores downloaded files during tests
│   ├── 📂 e2e
│   │   ├── 📂 penjualan      # Contains test scripts for "penjualan" (sales) flow
│   │   │   ├── create-pesanan.cy.js
│   │   │   ├── edit-pesanan.cy.js
│   │   │   ├── search-pesanan.cy.js
│   │   │   ├── test.spec.js
│   ├── 📂 fixtures           # Contains static test data (JSON files)
│   ├── 📂 helpers            # Utility/helper functions for tests
│   │   ├── faker.js          # Generates fake data for testing
│   ├── 📂 pages              # Page Object Model (POM) implementation
│   │   ├── 📂 sales
│   │   │   ├── order-form.page.js  # Handles interactions with the order form page
│   │   │   ├── order.page.js       # Handles order-related actions
│   │   ├── base.page.js        # Base page containing common functions
│   │   ├── login.page.js       # Handles interactions with the login page
│   │   ├── navigation.page.js  # Handles navigation elements
│   ├── 📂 screenshots          # Stores screenshots taken during tests
│   ├── 📂 support              # Cypress support files
│   ├── 📂 consts               # Constants and route configurations
│   │   ├── routes.js           # Defines API routes
│   ├── commands.js             # Custom Cypress commands
│   ├── e2e.js                  # Cypress test setup configuration
│── 📂 node_modules             # Installed dependencies (auto-generated)
│── .gitignore                  # Files to ignore in version control
│── cypress.config.js           # Cypress configuration file
│── cypress.env.json            # Environment-specific configuration
│── package.json                # Project dependencies and scripts
│── package-lock.json           # Lock file for dependency versions
│── README.md                   # Project documentation
```

---

## 🚀 Installation & Setup

### Prerequisites

- **Node.js** (v16 or later)
- **Cypress installed globally** (or use `npx`)

### Setup Instructions

**1. Clone the Repository**

```sh
git clone https://github.com/grellylucia/jubelio-qa-automation-test.git
cd jubelio-qa-automation
```

**2. Install dependencies**

```sh
npm install
```

**3. Set Up Environment Variables**

Create a `cypress.env.json` file from the example file :

```sh
cp cypress.env.json.example cypress.env.json
```

**4. Run Cypress Test Runner**

To open Cypress UI :

```sh
npm run cypress:open
```

To run Cypress tests in headless mode :

```sh
npm run cypress:run
```
