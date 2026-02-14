# PlayWrightAutomation_Framework

Lightweight Playwright test automation framework for UI end-to-end testing.

## Summary

This repository contains Playwright tests and configuration for browser automation and UI testing. The test suite is written in JavaScript and uses Playwright's test runner.

## Prerequisites

- Node.js (LTS recommended)
- npm

## Setup

1. Install dependencies:

```
npm install
```

2. (Optional) Install Playwright browsers if not included:

```
npx playwright install
```

## Running Tests

- Run the full test suite:

```
npx playwright test
```

- Open the HTML report in your browser:

```
npx playwright show-report
```

Reports will also be available in the `playwright-report/` folder after a test run.

## Project Structure

- `tests/` - test files (e.g., `example.spec.js`, `Uibasics.spec.js`)
- `playwright.config.js` - Playwright configuration
- `playwright-report/` - generated HTML reports
- `test-results/` - raw test result artifacts

## Contributing

Open an issue or submit a PR with improvements or additional tests.

## Author

Created by the project owner.
