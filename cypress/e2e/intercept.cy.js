describe("Intercept Test Suit " ,()=>{
    it("Test Case intercept " , ()=>{
        cy.intercept("**/AutomationPractice/").as("userInfo")
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait("@userInfo").then((res)=>{
            cy.log(res)
        })

    })
})