describe('Accounts overview feature', () => {
  it('check accounts overview', () => {
    cy.login();
    cy.get("a[href='overview.htm']").click();

    cy.get('#showOverview > .title').should('contain', 'Accounts Overview');
    
  });
});