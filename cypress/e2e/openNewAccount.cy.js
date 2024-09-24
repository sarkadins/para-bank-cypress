describe('Open new account feature', () => {
    it('open new account', () => {
      cy.login();
      cy.get("a[href='openaccount.htm']").click();
     
      cy.get('select#fromAccountId')
      .should('exist')
      .and('be.visible')
      .find('option')  
      .should('have.length.greaterThan', 0);

      cy.get("input[value='Open New Account']").should('exist').and('be.visible').click();
  
      cy.get("div[id='openAccountResult'] h1[class='title']").should('contain', 'Account Opened!');
    });
  });