describe("Asserting in many ways", function(){
    it("test case 1",function(){
        cy.visit("https://www.amazon.com/")
        cy.get("a[aria-label='Computers & Accessories']").should('have.class','a-link-normal quadrant-overlay').and('have.attr','href')
        expect(true).to.be.true
        const o = { foo: 'bar' }
        expect(o).to.deep.equal({ foo: 'bar' })
        assert.isObject(o, 'value is object')
    })
})