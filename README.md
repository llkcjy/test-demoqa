[English](./README.md) | [简体中文](./README.zh-CN.md)

# Playwright DemoQA E2E Test Suite

This repository contains the source code for the "Playwright E2E In-Practice" tutorial series. It aims to build a comprehensive test suite for `demoqa.com`, with each major feature being added in a separate article.

---

### Series Feature Roadmap

This list tracks the progress of the tutorial series and the features implemented in this repository.

- [x] **Part 1: Login / Logout** - Core authentication flows, CI/CD setup with GitHub Actions, and secure credential management.
- [ ] **Part 2: Book Store** - UI interaction with dynamic data, API mocking, and session state management.
- [ ] **Part 3: Profile & Forms** - Handling complex forms, file uploads, and advanced assertions.
- [ ] **(Planned) Advanced Interactions** - Drag & Drop, Sortables, and more.

---

### Getting Started

**1. Clone the Repository**
```bash
git clone https://github.com/your-username/demoqa-test-suite.git
cd demoqa-test-suite
```

**2. Install Dependencies**
```bash
# Install dependencies matching the lock file
npm ci
```

### Running Tests

**1. Provide Credentials**
You must provide the password for the test user `eliBug` via an environment variable.

**2. Execute Tests**
```bash
# macOS / Linux
DEMOQA_PASSWORD="your_secret_password" npx playwright test

# Windows (Command Prompt)
set DEMOQA_PASSWORD="your_secret_password"&& npx playwright test
```

**3. View Report**
```bash
npx playwright show-report
```

### CI/CD
The GitHub Actions workflow requires a repository secret named `DEMOQA_PASSWORD` to run successfully.

---

### Connect with Me

Let's learn and grow together.

![QR Code](qrcode.png)
