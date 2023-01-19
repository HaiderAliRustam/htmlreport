describe("Alert Test Suit Test", ()=>{
    it("Alert Test Case ",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#alertbtn").click()
        cy.on("window:alert", (abc)=>{
            expect(abc).to.be.equal("Hello , share this practice page and share your knowledge")
        })
    })
    it("Cencil Test Case" , ()=>{
        cy.visit("http://www.webdriveruniversity.com/Popup-Alerts/index.html")
        cy.get("#button4").click()
        cy.on("window:confirm",(abj)=>{
            return false
        })
        cy.get("#confirm-alert-text").should("have.text", "You pressed Cancel!")
    })
    it.skip("LollyLaw Test Case",()=>{
        cy.visit("https://dev.lollylaw.com/")
        cy.get("input[placeholder='Username'][name='email']").type("haider@lollylaw.com")
        cy.get("input[placeholder='Password']").type("Rustam@90")
        cy.get("button[class='btn btn-block btn-info']").click()
    })

    it("Practice Penther Test Case", ()=>{
        cy.visit("https://devops.practicepanther.com/")
        cy.get("input[placeholder='Email'][name='UserName']").type("hafizhaideraliuet+101@gmail.com")
        cy.get("input[placeholder='Password']").type("123456")
        cy.get(".login-action-button.btn.green.btn-block.loading-btn").click()
    })

    
})