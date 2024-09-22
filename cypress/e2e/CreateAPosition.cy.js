import { navigateThroughSviOglasi } from "../pageObjects/sviOglasi";
import { navigateThroughKreirajOglas } from "../pageObjects/kreirajOglas";
import { navigateToMatches } from "../pageObjects/matchesChat";


describe("Create a position", () => {
  
  it("Verify functionality of Create a positon", ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    )
    navigateThroughKreirajOglas.navigateToKreirajBtn()
    
    cy.get("#create_button").contains("Kreiraj").should("contain", "Kreiraj")
    cy.get("#draft_button").contains("Sačuvaj kao draft").should('contain',"Sačuvaj kao draft");
    cy.get(".component__button ").contains("Odbaci").should("contain","Odbaci")
    cy.get('.mb-3').contains('Naziv pozicije').should("contain","Naziv pozicije")
    cy.get('.mb-3').contains('Iskustvo u tehnologijama').should("contain","Iskustvo u tehnologijama")
    cy.get('.mb-3').contains(`Naziv projekta (ovo polje je za internu upotrebu i ostali korisnici ga neće videti)`).should("contain",` Naziv projekta (ovo polje je za internu upotrebu i ostali korisnici ga neće videti)`)
    cy.get('.mb-3').contains('O projektu').should("contain","O projektu")
    cy.get('.mb-3').contains('Lokacija').should("contain","Lokacija")
    cy.get('.mb-3').contains('Broj članova tima').should("contain","Broj članova tima")
    cy.get('.mb-3').contains('Način rada').should("contain","Način rada")
    cy.get('.mb-3').contains('Način razvoja projekta').should("contain","Način razvoja projekta")
    cy.get('.mb-3').contains('Tip projekta').should("contain","Tip projekta")
    cy.get('.mb-3').contains('Plata').should("contain","Plata")
    cy.get('.mb-3').contains('Benefiti').should("contain","Benefiti")
    


  })

  it("Verify that a User can submit an empty form", ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    )
    navigateThroughKreirajOglas.navigateToKreirajBtn()
    navigateThroughKreirajOglas.navigateToDraftBtn()

    cy.get('.mb-4').contains("Oglas je uspešno sačuvan kao draft.").should("contain", 'Oglas je uspešno sačuvan kao draft.')
    cy.get('.button-primary').contains("Vrati me na sve oglase").should("contain", 'Vrati me na sve oglase'
    )
})

it("Verify that a user can not submit an empty form by clickin on the button Create", ()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )
  navigateThroughKreirajOglas.navigateToKreirajBtn()
  cy.get("#create_button").contains("Kreiraj").click()
  cy.get('.ps-0').contains('Obavezno polje').should('contain', "Obavezno polje") 
  cy.get('.mb-0').contains('Obavezno polje').should('contain', "Obavezno polje")      
})









it("Verify that a user can input the max values in the input fields in the form Kreiranje oglasa.", ()=>{
  


    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    )
     let positionName = "cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP"
     let projectDescription= "XfhTWueNUtMfEYKQDEhBgTwHqCvGhRHJWPeWXtrkEnbRLjcMkmUpURUnSWeTnpASgHSivRuFtTxkcYxSWUkTAPPYrnPqYLNmcNkcXhaRtBBJNEevErgjAawakmpKTbSRPHKfueEcLkVAhZRvUxLwxKhKjYJVdpvHgwZNTVfaWdKWeABztaUNjwfGAqQkLYzArZpUnqTfvySQLJZnbqzLMRbGwNEEFvYgFxYUkQACVAtVQjERubWjgKWpGaGZcffcyiEbzwFrMtqqULPGNggkMayTLXWwwgKhGtmiDTnUvEprWUQQpCiMiMntPGvpkStfjbtCeZEBaugXqxNZrYUdpKcUXYRBCyMQhguKvqmkeGYyPhgwcHureikGmpzyVvSNwwLuRhLBbjKSXxpAKmcrJyQgShqBFjzZrEnCbLqMFNBQkeqGfuxTSWMnAGvgErMRLqtSKHBPLZSpSrtzJGDAjGwEkCEhgXMAxjAYuxEaQgyrbchdDxjimgwzGEDwwBVFrKiqDNYJNkzPhYxTWZCiVKJMeyPvUtjTJaNveyyuaeHMAWngWCjCZQSctGfmumiWZtVRdYBmRpKdFLPFiNfCSzvmZUncVwqyqbUJPrpTrJDVTffpiPrdSdyBFFbvfviMRWbcSbgCHdHSgjnwqjujWtcKATdQHcHPiRJEhvznuLvLrXbWqmXGEUxwBTVWgrDugeUMZbmNRGGtuZNyBdkTQMPpkxEZajBPJFCgQnWGayLmRFunrbZJfWxPhBQYHjDYXmdGnwkYaFSWRQktCtfNJViyCRKNpfzXLfFZwEEdkMqwjQcwXrZcESebAVbbFxjjtRvYEVMUWNQcRNXvcXKFAfDCqCvDSbdBuQMUidgycutdGqdDTdupuFALjbhfrcyTYfhgSTgpzgFevBcfXCcFrjTuYFkqXWSZumbkRjtPJcfgctJDpEwXubpzAjNHRjzTjjWktZFhzYxxTFXadKhNLMBdQtBZKcDBRSJrgnePtTnNJSCTDKLUWgfgUkSNVBNkSgFxuyNZTNddwPiLJdequgHNyjyrdggrCHJTruYRJMeAHJLPTLFcpdmCWBWVyVfwLccBtkwwdKbKjuCwKaMwvhNkCLtWnPuVwdnchQndpuDBZjXnpSPXUXaEHCdfWCLrDxFbCAxiAPHQGztBNrPTKteiwPYbVaZGAnXyTuwnwgFvjpyddgnaAVnvAYQJrBGhvEPckuvDLRTPCQqQJqTRYTWmtLxpPzpAaGxpvTZBXXXATeEiRauZfXVYEUpnfzqcCrRwniCBPqGeAZrmVmKGjjRdcMmFqZNCDZxKHdnuryudANmahNQqwAyxyYJEPXYbeuBdvavdfwEhFXBedKfcjhbUnaZCpzfKiTFLwHqPDzmHjhheinVXrHtZKNYGSpwcfQpDittNitGTdDdSrDuVGnZTwMRNgMacgKXvmeTMFxtadcPddcFtgahPmLZNhYVHvuTFajihKewGZtWaBpLjFTRjWFcc"
     let projectName = "wGYMgmQkqMDwNwmALQeVfyqSBdXYXx"
     let teamSize= "50"
     let max ="10000"
     let min = "1000"

    navigateThroughKreirajOglas.navigateToKreirajBtn()
    navigateThroughKreirajOglas.navigateToNazivPozicije(positionName)
    navigateThroughKreirajOglas.projectDescriptionInput(projectDescription)
     navigateThroughKreirajOglas.projectNameInput(projectName)
     navigateThroughKreirajOglas.projectTeamSize(teamSize)
     navigateThroughKreirajOglas.projectSalaryMax(max)
     navigateThroughKreirajOglas.projectSalaryMin(min)
     navigateThroughKreirajOglas.navigateToDraftBtn()

     ///warning element locator
     cy.get(".flex-column").find('.ps-0, mb-0').should('contain','Broj mora biti od 1 do 9999')
  
})


it("Verify that a User can reset Technologies and Years of experience input fields using a reset button.", ()=>{
  
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )
   let positionName = "cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP"
   let projectDescription= "XfhTWueNUtMfEYKQDEhBgTwHqCvGhRHJWPeWXtrkEnbRLjcMkmUpURUnSWeTnpASgHSivRuFtTxkcYxSWUkTAPPYrnPqYLNmcNkcXhaRtBBJNEevErgjAawakmpKTbSRPHKfueEcLkVAhZRvUxLwxKhKjYJVdpvHgwZNTVfaWdKWeABztaUNjwfGAqQkLYzArZpUnqTfvySQLJZnbqzLMRbGwNEEFvYgFxYUkQACVAtVQjERubWjgKWpGaGZcffcyiEbzwFrMtqqULPGNggkMayTLXWwwgKhGtmiDTnUvEprWUQQpCiMiMntPGvpkStfjbtCeZEBaugXqxNZrYUdpKcUXYRBCyMQhguKvqmkeGYyPhgwcHureikGmpzyVvSNwwLuRhLBbjKSXxpAKmcrJyQgShqBFjzZrEnCbLqMFNBQkeqGfuxTSWMnAGvgErMRLqtSKHBPLZSpSrtzJGDAjGwEkCEhgXMAxjAYuxEaQgyrbchdDxjimgwzGEDwwBVFrKiqDNYJNkzPhYxTWZCiVKJMeyPvUtjTJaNveyyuaeHMAWngWCjCZQSctGfmumiWZtVRdYBmRpKdFLPFiNfCSzvmZUncVwqyqbUJPrpTrJDVTffpiPrdSdyBFFbvfviMRWbcSbgCHdHSgjnwqjujWtcKATdQHcHPiRJEhvznuLvLrXbWqmXGEUxwBTVWgrDugeUMZbmNRGGtuZNyBdkTQMPpkxEZajBPJFCgQnWGayLmRFunrbZJfWxPhBQYHjDYXmdGnwkYaFSWRQktCtfNJViyCRKNpfzXLfFZwEEdkMqwjQcwXrZcESebAVbbFxjjtRvYEVMUWNQcRNXvcXKFAfDCqCvDSbdBuQMUidgycutdGqdDTdupuFALjbhfrcyTYfhgSTgpzgFevBcfXCcFrjTuYFkqXWSZumbkRjtPJcfgctJDpEwXubpzAjNHRjzTjjWktZFhzYxxTFXadKhNLMBdQtBZKcDBRSJrgnePtTnNJSCTDKLUWgfgUkSNVBNkSgFxuyNZTNddwPiLJdequgHNyjyrdggrCHJTruYRJMeAHJLPTLFcpdmCWBWVyVfwLccBtkwwdKbKjuCwKaMwvhNkCLtWnPuVwdnchQndpuDBZjXnpSPXUXaEHCdfWCLrDxFbCAxiAPHQGztBNrPTKteiwPYbVaZGAnXyTuwnwgFvjpyddgnaAVnvAYQJrBGhvEPckuvDLRTPCQqQJqTRYTWmtLxpPzpAaGxpvTZBXXXATeEiRauZfXVYEUpnfzqcCrRwniCBPqGeAZrmVmKGjjRdcMmFqZNCDZxKHdnuryudANmahNQqwAyxyYJEPXYbeuBdvavdfwEhFXBedKfcjhbUnaZCpzfKiTFLwHqPDzmHjhheinVXrHtZKNYGSpwcfQpDittNitGTdDdSrDuVGnZTwMRNgMacgKXvmeTMFxtadcPddcFtgahPmLZNhYVHvuTFajihKewGZtWaBpLjFTRjWFcc"
   let projectName = "wGYMgmQkqMDwNwmALQeVfyqSBdXYXx"
   let teamSize= "50"
   let max ="9999"
   let min = "1000"

  navigateThroughKreirajOglas.navigateToKreirajBtn()
  navigateThroughKreirajOglas.navigateToNazivPozicije(positionName)
  navigateThroughKreirajOglas.projectDescriptionInput(projectDescription)
   navigateThroughKreirajOglas.projectNameInput(projectName)
   navigateThroughKreirajOglas.projectTeamSize(teamSize)
   navigateThroughKreirajOglas.projectSalaryMax(max)
   navigateThroughKreirajOglas.projectSalaryMin(min)
   navigateThroughKreirajOglas.navigateToDraftBtn()

   ///warning element locator
cy.get('.mb-4').should('contain','Oglas je uspešno sačuvan kao draft.')
cy.get('.component__button').should('contain','Vrati me na sve oglase').click()
//job name locator
cy.get(".job-offers_rows").contains("cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP").click()


let technology ="Azzure"
let years ="5"

let technology2 = "JavaScript"
let years2 = "4"

let technology3 = "C++"
let years3 ="1"

let technology4="Python"
let years4= "1"

let technology5= "React"
let year5="<1"

navigateThroughKreirajOglas.TechnologyOne(technology, years)
navigateThroughKreirajOglas.TechnologyTwo(technology2, years2)
navigateThroughKreirajOglas.TechnologyThree(technology3, years3)
navigateThroughKreirajOglas.TechnologyFour(technology4, years4)
navigateThroughKreirajOglas.TechnologyFive(technology5,year5)

navigateThroughKreirajOglas.removeTech9()
navigateThroughKreirajOglas.removeTech8()
navigateThroughKreirajOglas.removeTech7()
navigateThroughKreirajOglas.removeTech6()
//navigateThroughKreirajOglas.removeTech5()


navigateThroughKreirajOglas.izaberiteFieldValue5()
navigateThroughKreirajOglas.izaberiteFieldValue6()
navigateThroughKreirajOglas.izaberiteFieldValue7()
navigateThroughKreirajOglas.izaberiteFieldValue8()
navigateThroughKreirajOglas.izaberiteFieldValue9()



})



it("Verify that a User can save values in the Benefiti section by clicking on  Izmeni Draft button min value.", ()=>{

  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )
  cy.get(".job-offers_rows").contains("cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP").click()
 
  let benefitOne= "Plaćen ručak" 


  navigateThroughKreirajOglas.projectBenefitsOne(benefitOne)
  navigateThroughKreirajOglas.navigateToChangeDraft()
  navigateThroughKreirajOglas.positionSavedAsADraftNotification()
  navigateThroughKreirajOglas.returnToAllPositions()
  navigateThroughKreirajOglas.getAJobByName()
  navigateThroughKreirajOglas.checkSelectedValueBenefitOne()





})


it("Verify that a User can save values in the Benefiti section by clicking on  Izmeni Draft button max value.", ()=>{

  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )
  cy.get(".job-offers_rows").contains("cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP").click()
 
  let benefitOne= "Plaćen ručak" 
  let benefitTwo = "13. plata"
  let benefitThree = "14. plata"
  


  navigateThroughKreirajOglas.projectBenefitsOne(benefitOne)
  navigateThroughKreirajOglas.projectBenefitsTwo(benefitTwo)
  navigateThroughKreirajOglas.projectBenefitsThree(benefitThree)
  navigateThroughKreirajOglas.navigateToChangeDraft()
  navigateThroughKreirajOglas.positionSavedAsADraftNotification()
  navigateThroughKreirajOglas.returnToAllPositions()
  navigateThroughKreirajOglas.getAJobByName()
  navigateThroughKreirajOglas.checkSelectedValueBenefitOne()
  navigateThroughKreirajOglas.checkSelectedValueBenefitTwo()
  navigateThroughKreirajOglas.checkSelectedValueBenefitThree()





})


it("Verify that user can click on the Modify position button and change the values in the already created Position", ()=>{



  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )
  cy.get(".job-offers_rows").contains("cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP").click()
  
  let benefitOne= "Deljenje profita"
  let benefitTwo = "Dodatna edukacija"

  navigateThroughKreirajOglas.projectBenefitsOne()
  navigateThroughKreirajOglas.projectBenefitsTwo()
 





let technology ="Azzure"
let years ="7"

let technology2 = "Python"
let years2 = "3"

navigateThroughKreirajOglas.TechnologyOne(technology, years,{ force: true })
navigateThroughKreirajOglas.TechnologyTwo(technology2, years2,{ force: true })


let city = "Beograd"
let state = 'Srbija'
let industry= "Mobile"
let projectDescription = "It project "
let teamSize = "25"

let position = "qa tester"
navigateThroughKreirajOglas.projectOfferName(position)
navigateThroughKreirajOglas.projectIndustry(industry)
navigateThroughKreirajOglas.projectState(state)
navigateThroughKreirajOglas.projectCity(city)
navigateThroughKreirajOglas.projectDescriptionInput(projectDescription)
navigateThroughKreirajOglas.projectNameInput().click().clear().type("Mobile testing")
navigateThroughKreirajOglas.projectDevelopmentTypeOne()
navigateThroughKreirajOglas.projectTeamSize(teamSize)
navigateThroughKreirajOglas.projectWorkEnvOne()
navigateThroughKreirajOglas.navigateToChangeDraft()

navigateThroughKreirajOglas.positionSavedAsADraftNotification()
navigateThroughKreirajOglas.returnToAllPositions()


})


it('Verify that user can click on the "Modify position" button and exit the modification process by clicking on the Reject button.', ()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )
cy.get(".job-offers_rows").contains("qa tester").click()
navigateThroughKreirajOglas.navigateToOdbaciBtn()
navigateThroughKreirajOglas.sviOglasi()
  //navigateThroughKreirajOglas.navigateToDropdownTop()

})



it("Verify that a user can  stop the Archiving process using Cancel button. ", ()=>{
  
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    )

  let active = "QA tester pozicija"
   navigateThroughSviOglasi.navigateToActive(active)
   navigateThroughSviOglasi.buttonArchive()
   navigateThroughSviOglasi.buttonConfirmCancel()
   navigateThroughSviOglasi.statusActiveElement()
   
   

   
})

it("Verify that a user can  stop the Archiving process using Close button.", ()=>{
  
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )


  let active = "QA tester pozicija"
  navigateThroughSviOglasi.navigateToActive(active)
 navigateThroughSviOglasi.buttonArchive()
 navigateThroughSviOglasi.buttonClose()
 navigateThroughSviOglasi.statusActiveElement()
 

 
})


it("Verify that a User can put the active positons in the Archives section using the Archive button.", ()=>{
  
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  )

  let active = "aaa"//this needs to be changed every time the test is run according to the active positions that we have in the list //
  navigateThroughSviOglasi.navigateToActive(active)
 navigateThroughSviOglasi.buttonArchive()
navigateThroughSviOglasi.buttonConfirmArchive()
let inactive = "aaa"  //this needs to be changed according to the new value from the previously active position//
 navigateThroughSviOglasi.navigateToInactive(inactive)
 navigateThroughSviOglasi.statusInactiveElement()
 
 
 

 
})



})


