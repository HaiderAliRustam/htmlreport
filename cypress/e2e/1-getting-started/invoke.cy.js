//import { values } from "cypress/types/lodash";

describe("First Invoke " , ()=>{
    it("Invoke Function Start ",()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        // cy.get("input[placeholder='Search for Vegetables and Fruits']")
        // .type("Cauliflower - 1 Kg")
        // cy.get("div[class='product-action'] button[type='button']")
        // .click();
        cy.get(".brand.greenLogo").invoke("text").then((values)=>{
            cy.log(values)
        })
        //cy.get("img[alt='Cart']").click()
        
        //Remove All the Product

        //cy.get("div[class='cart-preview active'] div div a[class='product-remove']").click()

        //Procede the order
       /* cy.get("div[class='cart-preview active'] button[type='button']").click()
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > button:nth-child(14)")
        .click()
        cy.get("div[class='wrapperTwo'] div select").select("Afghanistan")
        cy.get(".chkAgree").check()
        cy.get("div[class='wrapperTwo'] button").click()*/
        






        cy.get(".products").find(".product").each((ele, index, list)=>{
            cy.log(ele.text)
        })
       

    })

    it("Find all Product Name" ,()=>
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".products").find(".product").each((ele, index, list)=>
        {
            cy.log(ele.text())
            if(ele.text().includes("Brocolli"))
            {
            cy.wrap(ele).contains("ADD TO CART").click()
            //cy.log(ele.text)
            }
        })

    })
    it.only("Prent Child Chaning", ()=>{
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get(".search-keyword").type("br")
        // cy.get(".products").find(".product").should("have.length",2)
        // cy.get(".products").find(".product").eq("Brinjal - 1 Kg").contains("ADD TO CART").click()

        cy.get(".products").find(".product").each((ele, index, list)=>
        {
            cy.log(ele.text())
            if(ele.text().includes("Brinjal - 1 Kg")){
                //cy.wrap (ele) .find("[type= 'button']").click()
                cy.wrap(ele).contains("ADD TO CART").click()
            }
        })
        console.log("this is the end ")


    })
    

})