describe('Registration test feature', () => {
  it('Register new user', () => {
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
    });
  })
})