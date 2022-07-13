describe('action commands',function(){
    it("Performing action commands",function() {
        cy.visit("https://www.amazon.com/")
        cy.get("span[id='gw-sign-in-button'] a[class='a-button-text']").focus().should('contain','Sign in securely')
        cy.get("img[alt='Chairs']").rightclick()
        cy.get(".nav-search-field").within(() => {
            cy.get("#twotabsearchtextbox").type("apple mac book")
            cy.get("#twotabsearchtextbox").clear()
        })

        cy.get("span[id='gw-sign-in-button'] a[class='a-button-text']").focus().blur()
    
    })
    it("test case 2", function(){
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('.action-checkboxes [type="checkbox"]').not('[disabled]').check().should('be.checked').uncheck().should('not.be.checked')


    })
    it("test case3",function() {
        cy.visit("https://example.cypress.io/commands/actions")
        cy.get('.action-select').select('apples').should('have.value', 'fr-apples')
       
    })
    it("test case 4", function(){
        cy.visit("https://www.amazon.com/")
        cy.get("a[href='https://music.amazon.com?ref=dm_aff_amz_com']").scrollIntoView().should('be.visible')
    })
    it("test case 5", function(){
        cy.visit("https://www.amazon.com/")
        cy.get("#nav-link-accountList").trigger('mouseover')
        cy.get("div[id='nav-flyout-ya-signin'] span[class='nav-action-inner']").click()
        cy.go('back')
        cy.reload()
        cy.go('forward')
        cy.go(-1)
        cy.reload()
        cy.go(1)

    })

})