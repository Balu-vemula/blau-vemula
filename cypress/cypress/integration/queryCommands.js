


describe('get query',function(){
    it("test case1", function() {
        cy.visit("https://www.amazon.com/")
        cy.get('[data-csa-c-content-id="nav_cs_customerservice"]').should('contain','Customer Service')
    
        cy.get(".nav-search-field").within(() => {
            cy.get("#twotabsearchtextbox").type("apple mac book")

        })
        cy.get("#nav-search-submit-button").click()
        cy.contains("$600 to $700").click()
        cy.get("#twotabsearchtextbox").focus()

        
    })

    })
    
    // it("Amazon search using with-in command",function(){
    //     cy.visit("https://www.amazon.com/")
    //     cy.get(".nav-search-field").within(() => {
    //         cy.get("#twotabsearchtextbox").type("apple mac book")

    //     })
    //     cy.get("#nav-search-submit-button").click()
    //     cy.contains("See All 13 Departments").click()
    // })