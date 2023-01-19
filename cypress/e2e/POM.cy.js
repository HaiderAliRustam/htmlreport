/// <reference types="cypress" />
import Loginpage from '../support/Login_object.cy'

describe("POM Test Suit" ,()=>
{

     const name = new Loginpage;
    
    it.only("Login with POM  Function" , ()=>
    {
        //name.visit()
        name.submitLoginPage()
    })


    // it.skip("Login With Simple ",()=>
    // {
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?")
    //     cy.get("input[placeholder='Username']").type("Admin")
    //     cy.get("input[placeholder='Password']").type("admin123")
    //     cy.get("button[type='submit']").click()
    // })
})