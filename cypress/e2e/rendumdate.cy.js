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



   it("cypress-random-date is Generate Sucessfully" , ()=>{

    const date = new Loginpage;
    //cy.get("#rand_options_date1").click()
    date.selectRandomDate()
    
    
   })


 it("Rendum Number is Generate",()=>
 { 
  const data = new Loginpage;
  data.RendumNumber()


  })


 it("Number Generate one by one " ,()=>{
  const data =new Loginpage;
  data.NumberGenerate()
   

})
it("Rendum Option " , ()=>{
  const data = new Loginpage;
  data.RendumOption() 
      
})

it.only("By Clicking Enter Button to Login Page " ,()=>{
  const data =new Loginpage;
  data.EnterButton()

})




//






})