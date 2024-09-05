describe("Transfer funds feature", () => {
    it("transfer funds", () => {
        cy.login()
        cy.get("a[href='transfer.htm']").click()
        cy.get("#amount").type("100")
        cy.get("input[value='Transfer']").click()
        cy.get("div[id='showResult'] h1[class='title']").contains("Transfer Complete!")
    })
})