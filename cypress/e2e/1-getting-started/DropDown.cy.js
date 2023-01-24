describe("Dropdown Function Suot",()=>{
    it("DropDown Function Test Case",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#dropdown-class-example").select("option1")
        cy.get("#dropdown-class-example").should("have.value", "option1")
        cy.get(".inputs.ui-autocomplete-input").type("ali")
        .get(".ui-menu-item")
        .each((ele)=>  //.each(ele, index)
        {
            cy.log(ele.text())
            if(ele.text()=='Australia')
            cy.wrap(ele).click()
            cy.get("#autocomplete").should("have.value", "Australia")
        })
    })
    it("Check Box ", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('[type="checkbox"]').check(["option3", "option2"]).should("be.checked")
        cy.get('[type="checkbox"]').uncheck(["option2", "option1"]).should("not.be.checked")

        cy.get(".radioButton").check("radio2").should("be.checked")
        //i
    })
    it.only("",()=>{
        cy.visit("https://www.facebook.com/")
        console.log("efhohvo")
    })

})
