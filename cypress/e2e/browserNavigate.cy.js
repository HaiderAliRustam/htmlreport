describe("Browser Navigate Test Suit",()=>
{
    it("Test Case Browser Navigate ",()=>
    {
        cy.visit("https://www.rahulshettyacademy.com/")
        cy.get("body > div:nth-child(1) > header:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1)")
        .click()
        cy.go(-1)
        cy.wait(1000)
        cy.get("body > div:nth-child(1) > header:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(6) > a:nth-child(1)")
        .click()
        cy.wait(2000)
        cy.get("div[class='form-group text-center'] a[class='theme-btn']")
        .click()
        cy.wait(1000)
        cy.go(-1)
    })
})