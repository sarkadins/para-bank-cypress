# Para-Bank Cypress Testing

This repository contains automated test cases for the [Parabank application](https://parabank.parasoft.com/parabank/index.htm) using the Cypress framework. The test suite is designed to cover various functionalities of the Parabank website, ensuring its reliability and robustness through end-to-end testing.

## Table of Contents

- [Project Overview](#project-overview)
- [Technology Stack](#technology-stack)
- [Setup Instructions](#setup-instructions)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Tests](#running-the-tests)
- [Test Cases Implemented](#test-cases-implemented)
- [Built With](#built-with)

## Project Overview

The **Para-Bank Cypress Testing** project focuses on automating test scenarios for the Parabank web application. The tests are written using the Cypress framework, which provides a fast, reliable, and easy-to-use end-to-end testing solution for modern web applications.

## Technology Stack

- **Cypress**: End-to-end testing framework used to write and run automated test cases.
- **JavaScript**: Programming language for writing Cypress test scripts.
- **Node.js**: JavaScript runtime environment for executing Cypress tests.
- **Mocha and Chai**: Built-in test runner and assertion libraries that come with Cypress.

## Setup Instructions

### Prerequisites

Before setting up the project, ensure you have the following tools installed:

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **Cypress** (installed via npm)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/sarkadins/para-bank-cypress.git
   cd para-bank-cypress
   ```

2. **Install dependencies**

    Install Cypress and other dependencies specified in the package.json file:

    ```bash
    npm install
    ```

3. **Open Cypress Test Runner**

    After installing Cypress, you can open the Cypress Test Runner using:

    ```bash
    npx cypress open
    ```

### Running the Tests

1. Run Tests via Cypress Test Runner

    Open the Cypress Test Runner:

    ```bash
    npx cypress open
    ```
    Then select the desired browser (e.g., Chrome, Electron) and click on the test file to run it.

2. Run Tests via Command Line

    You can also run all tests headlessly from the command line:

    ```bash
    npx cypress run
    ```

## Test Cases Implemented

The following test cases have been automated for the Parabank application:

1. User Registration

    - Tests the user registration process with valid data.
    - Verifies that users are notified if they attempt to register with an existing username.

2. User Login

    - Tests login functionality with valid and invalid credentials.
    - Validates error messages for incorrect login attempts.

3. Logout

    - Verifies that users can log out successfully.
    - Ensures that the session is terminated and the user is redirected to the login page.

## Built with

[![cypress][cypress-shield]][cypress-url]

[![javascript][javascript-shield]][javascript-url]

[![node.js][node-shield]][node-url]

[![mocha][mocha-shield]][mocha-url]

[![chai][chai-shield]][chai-url]


[cypress-shield]: https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e

[cypress-url]: https://www.cypress.io/

[javascript-shield]: https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript&logoColor=white

[javascript-url]: https://www.javascript.com/

[node-shield]: https://img.shields.io/badge/Node.js-v14+-green?logo=node.js&logoColor=white

[node-url]: https://nodejs.org/en

[mocha-shield]: https://img.shields.io/badge/Mocha-Testing%20Framework-8D6748?logo=mocha&logoColor=white

[mocha-url]: https://mochajs.org/

[chai-shield]: https://img.shields.io/badge/Chai-Assertion%20Library-9D8D5F?logo=chai&logoColor=white

[chai-url]: https://www.chaijs.com/