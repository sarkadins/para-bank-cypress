/// <reference types="cypress" />

describe('Registration test feature', () => {
  it('Register new user', () => {
    cy.registerNewUser();
  })
})