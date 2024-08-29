// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("registerNewUser", () => {
    cy.visit('https://parabank.parasoft.com/parabank/')
    cy.get('#loginPanel > :nth-child(3) > a').click()
    cy.get("input[id='customer.firstName']").type("John")
    cy.get("input[id='customer.lastName']").type("Doe")
    cy.get("input[id='customer.address.street']").type("18 Test street")
    cy.get("input[id='customer.address.city']").type("Huntsville")
    cy.get("input[id='customer.address.state']").type("Alabama")
    cy.get("input[id='customer.address.zipCode']").type("3604")
    cy.get("input[id='customer.phoneNumber']").type("12345678")
    cy.get("input[id='customer.ssn']").type("6842396")
    cy.get("input[id='customer.username']").type("john_doe")
    cy.get("input[id='customer.password']").type("test1234")
    cy.get("#repeatedPassword").type("test1234")
    cy.get("input[value='Register']").click()
    cy.get('body').then(($body) => {
      if ($body.find("span[id='customer.username.errors']").length > 0) {
        cy.get("span[id='customer.username.errors']").contains("This username already exists.");
      } else {  
        cy.get("div[id='rightPanel'] p").contains("Your account was created successfully. You are now logged in.");
      }
    })
  });

  Cypress.Commands.add("login", () => {
    cy.visit('https://parabank.parasoft.com')
        cy.get("input[name='username']").type('john_doe')
        cy.get("input[name='password']").type('test1234')
        cy.get("input[value='Log In']").click()
        cy.get('body').then(($body) => {
            if ($body.find("div[id='showOverview'] h1[class='title']").length > 0) {
                cy.get("div[id='showOverview'] h1[class='title']").contains("Accounts Overview")
            } else {
                cy.registerNewUser()
            }
        })
  })