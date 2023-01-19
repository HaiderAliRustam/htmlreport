describe("API Scries Test Suit", ()=>{
    it.skip ("Simple Custom Commend Test Case",()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/").wait(1000)
        cy.clickbutton("#alertbtn")
    })


    it("GET API Test Case", ()=>
    {
        cy.request({
            method : 'GET',
            url: "https://reqres.in/api/users?",
            qs: {
                page : 1

            }
        }).then((resp)=>
        {
            cy.log(resp)
           // cy.clickbutton(resp.body.data.first_name)
           cy.log(resp.body.data[5].first_name)
        })

    })

    it("POST Req Test Case", ()=>{
        cy.request({
            method: "POST",
            url : "https://reqres.in/api/users",
            body:{
                "name": "morpheus",
                "job": "leader"
            }
        }).then((resp)=>{
            cy.log(resp.body.name)
            expect(resp.status).to.equals(201)
            expect(resp.body.name).to.eq("morpheus")
        })
    })


    it("PUT Req Test Case", ()=>{
        cy.request({
            method: "PUT",
            url  : "https://reqres.in/api/users/2",
            body :{
                "name": "Hiader",
                "job": "leader"
            }
        })
        .then((resp)=>{[
            cy.log(resp)
        ]})
    })






    it.only("Multiple API",()=>
    {
        cy.request({
            method : "GET",
            url: "https://reqres.in/api/users?",
            qs: {
                page : 1

            }
        
        })
        .then((rep)=>
        {
            cy.log(rep.body.data[5].first_name)
            // cy.log(rep.body.data.first_name)
             const dummyName = rep.body.data[5].first_name
            cy.log(dummyName)
           // return dummyName

        })
    //        .then((dummyName)=>
    //        {
    //           cy.log("This Name is Gererated from the First Api" + dummyName)
    //           cy.request({
    //             method: "POST",
    //             url : "https://reqres.in/api/register",
    //             body : {
                    
    //                     "name": dummyName,
    //                     "job": "leader"
                    
    //             }
    //         }).then((reps)=>
    //         {
    //             cy.log(reps)
    //         })
    //     })
     })

})