describe("Logout test feature", () => {
    it("Log out with user", () => {
        cy.login()
        cy.get("a[href='logout.htm']").click()
        cy.get("div[id='leftPanel'] h2").contains("Customer Login")
    })
})