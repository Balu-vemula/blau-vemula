describe("Asserting in many ways", function(){
    it("with end()",function(){
        cy.visit("https://example.cypress.io/commands/misc")
        cy.get(".table.table-bordered.misc-table").within(()=>{
            cy.contains('Cheryl').click().end()
            cy.wait(1000)
            cy.contains('Charles').click()
        })


        })
        it("TEST CASE 2", function(){
            cy.visit("https://www.amazon.com/")
        cy.get("#nav-link-accountList").trigger('mouseover')
        cy.get("div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']").click()
        cy.get("#ap_email").focused().should('have.attr','name').and('include','email')
        cy.screenshot('first cypress image')
        cy.viewport(1920,1080)
    })
    it("test case 3", function(){
        cy.wrap({foo: 'bar'}).should('have.property', 'foo').and('include', 'bar')
    })
})