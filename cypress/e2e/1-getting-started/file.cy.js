describe("Test Suit in TS File ",()=>
{
    it("Upload file in Ts test Case " , ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload")
        const filePath = "Invoice_84.docx"
        const img = "images (5).png"
        cy.get("#file-upload").attachFile(img)
        cy.get("#file-submit").click()
        
    })
})