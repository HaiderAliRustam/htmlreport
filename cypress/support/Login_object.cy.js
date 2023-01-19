const abc = require('../fixtures/Login.json')

class Loginpage {

    // visit(){
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?")
    // }

    submitLoginPage()

    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?")
        cy.get(abc.username_Loc).type(abc.userdata)
        cy.get(abc.password_Loc).type(abc.passdata)
        cy.get(abc.submit_Loc).click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("have.text", "Dashboard")
    }

    abc(){

    }
}
export default Loginpage