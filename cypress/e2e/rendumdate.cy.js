//const { it } = require("mocha");

import Loginpage from "../support/Login_object.cy"

describe("Rendum Date is Select" , ()=>
{

    it("Rendum Date test case",()=>
    {
        cy.visit("https://www.randomlists.com/random-date?dup=true&qty=6&date2=2024-01-27&date1=2023-01-28")
        //#rand_options_date1

        cy.clock()
     cy.get('#rand_options_date1').then(datePicker => {
    const start = new Date(datePicker.data('2015-06-01T00:00:00.000Z'));
    const end = new Date(datePicker.data('2202-05-06T00:00:00.000Z'));
    const randomTimestamp = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTimestamp);
    cy.tick(randomDate - new Date());
    cy.get('#rand_options_date1').click();
    //cy.get('#rand_options_date1 .randomDate').contains(randomDate.getDate()).click();
      });
   })



   it.only("cypress-random-date is Generate Sucessfully" , ()=>{

    const date = new Loginpage;

    cy.visit("https://www.randomlists.com/random-date?dup=true&qty=6&date2=2024-01-24&date1=2023-02-01")

    //cy.get("#rand_options_date1").click()
    date.selectRandomDate()
    
    
   })


 it("Rendum Number is Generate",()=>
 {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    let randomNum = Math.floor(Math.random() * 1000) + 1;
    console.log(randomNum);
    cy.get(".inputs.ui-autocomplete-input").type("Fun Tech "+ randomNum)
    cy.log(randomNum)
    const installment = randomNum/7;
    cy.log("Rendum Number")
    cy.log(installment)
    //console.log(installment)

  })


 it("Number Generate one by one " ,()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    let counter = 16;
     counter++;
    console.log(counter); // Output: 1
    cy.get(".inputs.ui-autocomplete-input").type("Fun Tech "+ counter)



})
it("Rendum Option " , ()=>{
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#dropdown-class-example').then(($select) => {
        const optionsLength = $select.find('option').length;
        const randomIndex = Math.floor(Math.random() * optionsLength);
        cy.get('#dropdown-class-example').select($select.find('option').eq(randomIndex).val());
      });
      
})




//






})