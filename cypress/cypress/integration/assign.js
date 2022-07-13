describe("test", function(){
    it("testcase", function(){
        cy.visit("https://www.dell.com/en-in")
        cy.viewport(1920,1080)
        // cy.get("[id='um-si-label']").trigger("mouseover")
        // cy.get(".mh-btn mh-btn-primary navigate").click()
        cy.xpath("//*[@id=\"unified-masthead\"]/div[1]/div[2]/div[3]/div/a/span/span[1]").trigger('mouseover')
        

        
    })
})