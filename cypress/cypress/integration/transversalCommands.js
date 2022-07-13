describe('get query',function(){
    it("test case1", function() {
        cy.visit("https://www.amazon.com/")
        cy.get("#nav-xshop").children().should('have.length',8)
        cy.get(".nav-a[href='/gift-cards/b/?ie=UTF8&node=2238192011&ref_=nav_cs_gc']").closest('div').should('have.class','nav-progressive-content')
        cy.get("#nav-xshop").find('a').should('have.length',6)
        cy.get("#nav-xshop").first().should('contain','window.navmet.tmp=+new Date();')
        cy.get("#nav-xshop>a").eq(0).should('contain',"Today's Deals")
        cy.get("#nav-xshop").last().should('contain',"window.navmet.push({key:'CrossShop',end:+new Date(),begin:window.navmet.tmp});")
        cy.get("#nav-xshop").contains('Registry').next().should('contain','Gift Cards')
        cy.get("#nav-xshop").contains('Registry').nextAll().should('have.length',4)
        cy.get("#nav-xshop").contains('Registry').nextUntil('[data-csa-c-content-id="nav_cs_sell"]').should('have.length',1)
        cy.get('#nav-shop').parent().should('have.class','nav-fill')
        cy.get("#nav-xshop").parents().should('have.class','nav-fill')
        

    })

    })