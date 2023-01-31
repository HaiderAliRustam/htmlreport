const abc = require('../fixtures/Login.json')

class Loginpage {

    // visit(){
    //     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?")
    // }

    submitLoginPage()

    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login?" , { video: false });
        cy.get(abc.username_Loc).type(abc.userdata)
        cy.get(abc.password_Loc).type(abc.passdata)
        cy.get(abc.submit_Loc).click()
        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should("have.text", "Dashboard")
    }

    


     selectRandomDate() {
        cy.visit("https://www.randomlists.com/random-date?dup=true&qty=6&date2=2024-01-24&date1=2023-02-01")

        const randomTimestamp = new Date(new Date().getTime() - Math.floor(Math.random() * 1000000000000));
        const randomDate = new Date(randomTimestamp).toISOString().slice(0,10);
        cy.get('#rand_options_date1').clear().type(randomDate);
      }
      RendumNumber(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        let randomNum = Math.floor(Math.random() * 1000) + 1;
        console.log(randomNum);
        cy.get(".inputs.ui-autocomplete-input").type("Fun Tech "+ randomNum)
        cy.log(randomNum)
        const installment = randomNum/7;
        cy.log("Rendum Number")
        cy.log(installment)
        //console.log(installment)
      }
      NumberGenerate(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        let counter = 16;
         counter++;
        console.log(counter); // Output: 1
        cy.get(".inputs.ui-autocomplete-input").type("Fun Tech "+ counter)
      }
      RendumOption(){
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#dropdown-class-example').then(($select) => {
            const optionsLength = $select.find('option').length;
            const randomIndex = Math.floor(Math.random() * optionsLength);
            cy.get('#dropdown-class-example').select($select.find('option').eq(randomIndex).val());
          });
      }

      EnterButton(){
  
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").type('{enter}')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > p:nth-child(2)").should("have.text", "Time at Work")
        console.log("Loginf properly with the click on Enter Button")
      }
}
export default Loginpage