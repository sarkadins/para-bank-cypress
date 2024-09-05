describe('Open new account feature', () => {
    it('open new account', () => {
      cy.login();
      cy.get("a[href='openaccount.htm']").click();
  
      // Ensure the select element exists and is visible
      cy.get('select#fromAccountId').should('exist').and('be.visible');
  
      // Ensure the button is visible and clickable
      cy.get("input[value='Open New Account']").should('exist').and('be.visible').click();
  
      // Check for the success message
      cy.get("div[id='openAccountResult'] h1[class='title']").should('contain', 'Account Opened!');
    });
  });