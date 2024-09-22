import { navigateThroughSviOglasi } from "../pageObjects/sviOglasi";
import { navigateThroughKreirajOglas } from "../pageObjects/kreirajOglas";
import { navigateToMatches } from "../pageObjects/matchesChat";
import { editDraftPage, navigateToEditDraftPage } from "../pageObjects/EditDraftPAge";
import { navigateThroughProfilKompanije } from "../pageObjects/companyProfile";
import {  navigateThroughLogInLogOut } from "../pageObjects/logInLogOut";


describe ('Log in and out', ()=> {

    it('Verify that a User can Log in with an email registered in the database.', () => {
        cy.visit(
          "https://staging.company.matchit.rs"
        )
       let email = 'daliborivanovic83@gmail.com'
       

       navigateThroughLogInLogOut.emailInput(email)

       navigateThroughLogInLogOut.submitButton()
       navigateThroughLogInLogOut.assertionMessageSent()
      
      })

    
  it("Verify that a user can not Log in with an unregistered email", () =>{
   
    cy.visit(
      "https://staging.company.matchit.rs"
    )
   let email = 'daliborivanovic@gmail.com'
   

   navigateThroughLogInLogOut.emailInput(email)

   navigateThroughLogInLogOut.submitButton()
   navigateThroughLogInLogOut.assertionUnregisteredEmail()



  })



  it("Verify that a user can not Log in with an invalid email fomat", () =>{
   
    cy.visit(
      "https://staging.company.matchit.rs"
    )
   let email = 'daliborivanovicgmail.com'
   

   navigateThroughLogInLogOut.emailInput(email)

   navigateThroughLogInLogOut.submitButton()
   navigateThroughLogInLogOut.assertionInvalidEmailFormat()
   

   

});

it("Verify that a user can not send an empty email form ", () =>{
   
  cy.visit(
    "https://staging.company.matchit.rs"
  )
 let email = ' '
 

 navigateThroughLogInLogOut.emailInput(email)

 navigateThroughLogInLogOut.submitButton()
 navigateThroughLogInLogOut.assertionEmptyEmailField()

})





it("Verify functionality of the log out button",()=>{
  
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    
  )
  navigateThroughLogInLogOut.logOutCompanyProfile()
  navigateThroughLogInLogOut.assertionLoggedOut()
})
})