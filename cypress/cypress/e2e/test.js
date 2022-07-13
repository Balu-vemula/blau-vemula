


describe('get query',function(){
    it("test case1", function() {
        cy.visit("https://www.amazon.com/")
        cy.get('[data-csa-c-content-id="nav_cs_customerservice"]').should('contain','Customer Service')
        cy.get('[data-csa-c-content-id="nav_cs_gc"]').contains("Gift Cards").click()

    })
    it("test case2", function() {
        cy.visit("https://www.freshworks.com/")
        cy.get('#rsgisterNow').click()
    })
   
})