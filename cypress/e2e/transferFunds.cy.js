describe("Transfer funds feature", () => {
    it("transfer funds", () => {
        cy.login()
        cy.get("a[href='transfer.htm']").click();
        
        cy.get('select#fromAccountId')
          .should('exist')
          .and('be.visible')
          .find('option')
          .should('have.length.greaterThan', 1);

        cy.get('select#toAccountId')
          .should('exist')
          .and('be.visible')
          .find('option')
          .should('have.length.greaterThan', 1); 

        cy.get('select#fromAccountId').select(1); 
        cy.get('select#toAccountId').select(1);
        cy.get("#amount").type("100");
        cy.get("input[value='Transfer']").click();
        cy.get("div[id='showResult'] h1[class='title']").contains("Transfer Complete!");
    })
})