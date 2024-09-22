import { navigateThroughSviOglasi } from "../pageObjects/sviOglasi";
import { navigateThroughKreirajOglas } from "../pageObjects/kreirajOglas";
import { navigateToMatches } from "../pageObjects/matchesChat";
import { editDraftPage, navigateToEditDraftPage } from "../pageObjects/EditDraftPAge";



describe('All Positions', () => {


  it('Verify that a User can not open sections "deck kandidata" when  the position is Inactive.', () => {
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    )

    navigateThroughSviOglasi.navigateToAllPositions()
    let inactive = "pppppppppppppppppppp"
    navigateThroughSviOglasi.navigateToInactive(inactive)
    navigateThroughSviOglasi.navigateToCandidates()
    navigateThroughSviOglasi.assertionCandidatesLinkIsInactive()
    
  })


  it("Verify functionality of the Kandidati page.", ()=>{

    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    )
    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="test pozicija cs"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.navigateToCandidatesDeck()
    navigateThroughSviOglasi.addToDeckBtn()
    navigateThroughSviOglasi.assertionRestOfTheCandidatesDeck()
    navigateThroughSviOglasi.goToTheRestOfTheCandidatesBtn()
    navigateThroughSviOglasi.removeFromDeckBtn()
    navigateThroughSviOglasi.assertionRestOfTheCandidatesDeck()

    


  })

  it('Verify that a user can go through the deck of candidates using check or close button.',()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="test pozicija cs"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.navigateToCandidatesDeck()
    navigateThroughSviOglasi.addToDeckBtnOnce()
    navigateThroughSviOglasi.removeFromDeckBtnOnce()
  })


  it('Verify that the user of the app can go to the rest of the candidates deck by clicking on the "Check the rest of the Candidates"button.',()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="test pozicija cs"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.navigateToCandidatesDeck()
    navigateThroughSviOglasi.addToDeckBtn()
    navigateThroughSviOglasi.assertionRestOfTheCandidatesDeck()
    navigateThroughSviOglasi.goToTheRestOfTheCandidatesBtn()
    navigateThroughSviOglasi.removeFromDeckBtn()
    navigateThroughSviOglasi.assertionRestOfTheCandidatesDeck()
  })


  it('Verify functionality of the "Candidates" link in the position advertised.', () => {

    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 
    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="Junior Javascript developer Dalibor"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.navigateToCandidatesDeck()
    navigateThroughSviOglasi.assertionProjectName()
    navigateThroughSviOglasi.assertionsTechnologies()
  
    navigateThroughSviOglasi.assertionsEmploymentTypes ()
  })


  it('Verify functionality of the "Position details" link in the position advertised.', ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="test pozicija cs"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.goToThePositionDetails()
    navigateThroughSviOglasi.assertionsTechnology()
    navigateThroughSviOglasi.assertionsProjects()
    navigateThroughSviOglasi.assertionsTypesOfEmployments()
    navigateThroughSviOglasi.assertionsBenefit()
  })


  it('Verify functionality of the "Matches" link in the position advertised.', ()=>{

    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="Senior C++ developer"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.goToTheMatchesPage()
    navigateThroughSviOglasi.assertionMatchesButtonActive()

  })


  it('Verify that a user can reply to a message by using reply button in the chat.', ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="Senior C++ developer"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.goToTheMatchesPage()
    navigateThroughSviOglasi.clickOnTheCandidateInTheDeck()
    
    navigateThroughSviOglasi.hoverOverTheChatExtraReplyThreadBtn()
    navigateThroughSviOglasi.assertionThreadSection()

  })


  it('Verify that a User can Modify a postition that has Active status.', () => {
    
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      ) 
  
      navigateThroughSviOglasi.navigateToAllPositions()
      const active ="Draft 7333"////this value needs to be the as the text in the active position that we have choosen fro  the current active positions
      navigateThroughSviOglasi.navigateToActive(active)
      navigateThroughSviOglasi.naviagteToModifyPositionBtn()
      navigateThroughSviOglasi.assertionModifyThePositionPage()
      navigateThroughSviOglasi.inputSalaryMax()
      navigateThroughSviOglasi.inputSalaryMax()
      navigateThroughSviOglasi.inputJobtitle()
      navigateThroughSviOglasi.navigateToConfirmModificationBtn()
      navigateThroughSviOglasi.naviagteToReturnToAllPositions()
      navigateThroughSviOglasi.assertionPendingPositionTab()

  })



  it('Verify that a User can cancel the modification proces of a postition that has Active status.', ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const active ="Senior C++ developer"
    navigateThroughSviOglasi.navigateToActive(active)
    navigateThroughSviOglasi.naviagteToModifyPositionBtn()
    navigateThroughSviOglasi.assertionModifyThePositionPage()
    navigateThroughSviOglasi.inputSalaryMax()
    navigateThroughSviOglasi.inputSalaryMax()
    navigateThroughSviOglasi.inputJobtitle()
    navigateThroughSviOglasi.navigateToCancelModificationBtn()
    navigateThroughSviOglasi.assertionPositionDetailsTab()
  })




  it('Verify that a user cannot use the Candidates Deck when the Advertised position has the status of Inactive', ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 

    navigateThroughSviOglasi.navigateToAllPositions()
    const inactive = 'QA Engineer - odbiti'

    //// this value needs to be changed in order to find the next inactive position in order for the test to run
    navigateThroughSviOglasi.navigateToPending(inactive)
    navigateThroughSviOglasi.assertionCandidatesLinkIsInactive()
    



  })

   it("Verify that a user cannot use the Candidates Deck when the Advertised position has the status of Pending", ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 
    navigateThroughSviOglasi.navigateToAllPositions()
    const pending = "Fixtures are great"

    /////this value needs to be changed according to the current position with the status pending
    
    navigateThroughSviOglasi.navigateToPending(pending)
    navigateThroughSviOglasi.assertionCandidatesLinkIsInactive()

   })

   


   it("Verify that a user can use the Matches Deck when the Advertised position has the status of Pending", ()=>{
    cy.visit(
      "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
    ) 
    navigateThroughSviOglasi.navigateToAllPositions()
    const pending = "Fixtures are great"
    navigateThroughSviOglasi.navigateToPending(pending)
    navigateThroughSviOglasi.navigateToMatches()
    navigateThroughSviOglasi.assertionMatchesLinkIsActive()

   })

 it("Verify that a user can use the Matches Deck when the Advertised position has the status of Active",()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  navigateThroughSviOglasi.navigateToAllPositions()
  const active ="QA tester pozicija"
      navigateThroughSviOglasi.navigateToActive(active)
      navigateThroughSviOglasi.navigateToMatches()
      navigateThroughSviOglasi.assertionMatchesLinkIsActive()
 })

it('Verify that a user can use the Candidates Deck when the Advertised position has the status of Active',()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  navigateThroughSviOglasi.navigateToAllPositions()
  
  const active ="QA tester pozicija"
      navigateThroughSviOglasi.navigateToActive(active)

  



      navigateThroughSviOglasi.navigateToCandidatesDeck()
      navigateThroughSviOglasi.assertionCandidatesLinkIsActive()


})


it('Verify that a user can open an additional "..." menu if the position advertised has the status of Active',()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  navigateThroughSviOglasi.navigateToAllPositions()
  
  const active ="QA tester pozicija"
      navigateThroughSviOglasi.navigateToActive(active)
      navigateThroughSviOglasi.buttonExtraMenu()
      navigateThroughSviOglasi.assertionExtraMenuIsOpen()


})




it('Verify that a user can open an additional "..." menu if the position advertised has the status of Inactive', ()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const inactive = 'QA Engineer - odbiti'
  navigateThroughSviOglasi.navigateToInactive(inactive)
      navigateThroughSviOglasi.buttonExtraMenu()
      navigateThroughSviOglasi.assertionExtraMenuIsOpen()


})

it('Verify that a user can use all the buttons displayed in the top part of the screen if the position advertised has the status of Draft.', ()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const draft = "Draft 41"
  navigateThroughSviOglasi.navigateToDraft(draft)
  navigateThroughSviOglasi.assertionEditTheDraftPage()

  


})






it('Verify that a user can use all the buttons displayed in the top part of the screen if the position advertised has the status of Draft', ()=>{
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const draft = "Draft 41"
  navigateThroughSviOglasi.navigateToDraft(draft)
  navigateThroughSviOglasi.assertionEditTheDraftPage()

  navigateToEditDraftPage.buttonReject()
  navigateThroughSviOglasi.assertionAllPositionsPage()





  navigateThroughSviOglasi.navigateToAllPositions()
  navigateThroughSviOglasi.navigateToDraft(draft)
  navigateThroughSviOglasi.assertionEditTheDraftPage()
  navigateToEditDraftPage.buttonEditTheDraft()
  navigateThroughSviOglasi.assertionDraftIsSaved()
  navigateThroughSviOglasi.buttonReturnToAllPositions()

  navigateThroughSviOglasi.navigateToAllPositions()
  navigateThroughSviOglasi.navigateToDraft(draft)
  navigateToEditDraftPage.buttonCreateAPosition()
  navigateThroughSviOglasi.assertionMandatoryField()


  const draftTwoDelete = "Draft 37" ////you need to change the draft Position every time after it is deleted from the list of positions////
  navigateThroughSviOglasi.navigateToAllPositions()
  navigateThroughSviOglasi.navigateToDraftDelete(draftTwoDelete)
  navigateToEditDraftPage.buttonEraseTheDraft()
  navigateThroughSviOglasi.assertionDraftDeleted()
  navigateThroughSviOglasi.assertionDraftDeleted()
  navigateThroughSviOglasi.buttonReturnToAllPositions()
  


})


it('Verify the status of the buttons from ... menu if the position advertised has the status of Active.', () => {
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  navigateThroughSviOglasi.navigateToAllPositions()
  const active ="QA tester pozicija" /////the position needs to be active at the start of the test and needs to be changed for every test run///
      navigateThroughSviOglasi.navigateToActive(active)
      navigateThroughSviOglasi.buttonExtraMenu()
      navigateThroughSviOglasi.assertionExtraMenuIsOpen()
     // navigateThroughSviOglasi.buttonDuplicateThePosition()
     // navigateThroughKreirajOglas.assertionCreateAPositionPage()

     // navigateThroughSviOglasi.navigateToAllPositions()
     // navigateThroughSviOglasi.navigateToActive(active)
     // navigateThroughSviOglasi.buttonExtraMenu()
     // navigateThroughSviOglasi.assertionExtraMenuIsOpen()
    //  navigateThroughSviOglasi.buttonArchiveThePosition()
    //  navigateThroughSviOglasi.assertionArchiveModalVisible()
      



})

it('Verify the status of the buttons from "..." menu if the position advertised has the status of Inactive', () => {
 
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const inactive = 'QA Engineer - odbiti' /// this position needs to be changed according to the ianctive positions from the list

  navigateThroughSviOglasi.navigateToInactive(inactive)
      navigateThroughSviOglasi.buttonExtraMenu()
      navigateThroughSviOglasi.assertionExtraMenuIsOpen()

      



})

it('Verify the status of the buttons from "..." menu if the position advertised has the status of "Pending".', () => {
 
 
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  navigateThroughSviOglasi.navigateToAllPositions()
  const pending = "Fixtures are great"
  navigateThroughSviOglasi.navigateToPending(pending)
      navigateThroughSviOglasi.buttonExtraMenu()
      navigateThroughSviOglasi.assertionExtraMenuIsOpen()

      



})



it('Verify the status of the buttons from "..." menu if position advertised has the status of "Draft".', () => {
 
 
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const draft = "Draft 78"
  navigateThroughSviOglasi.navigateToDraft(draft)
      navigateThroughSviOglasi.assertionExtraMenuNotDisplayed()
      

      



})


it('Verify that the User can visit the All matches page by clicking on the "All matches" link.', () => {
 
 
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  navigateThroughSviOglasi.navigateToMatches()
  navigateThroughSviOglasi.assertionAllMatchesPage()
      

      



})

it('Verify that the User can use the Matchat section of the page when the status of the position advertised is "Pending".', () => {
 
 
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const pending = "Junior Javascript developer"
  navigateThroughSviOglasi.navigateToPending(pending)
  navigateThroughSviOglasi.goToTheMatchesPage()
  navigateThroughSviOglasi.assertionAllMatchesPage()
  navigateThroughSviOglasi.assertionMatchesLinkIsClickable()
  const name = "DALIBOR Ivanovic "
  navigateToMatches.clickOnTheUser(name)
  const message ="Hallo"
  navigateToMatches.chatInputField(message)
  navigateToMatches.chatSendBtn()
  const textMsg = "Hallo"
  navigateThroughSviOglasi.assertionMessageIsReceivedMatchat(textMsg)
  

  





})

it('Verify that the User can use the Matchat section of the page when the status of the position advertised is "Active".', () => {
cy.visit(
  "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
) 
/// variable values need to be checked and corrected according to the current chat users
navigateThroughSviOglasi.navigateToAllPositions()
const active = "Junior Javascript developer Dalibor"
navigateThroughSviOglasi.navigateToActive(active)
navigateThroughSviOglasi.goToTheMatchesPage()
navigateThroughSviOglasi.assertionAllMatchesPage()
navigateThroughSviOglasi.assertionMatchesLinkIsClickable()
const name = "Tijana"
navigateToMatches.clickOnTheUser(name)
const message ="Hallo"
navigateToMatches.chatInputField(message)
navigateToMatches.chatSendBtn()
const textMsg = "Hallo"
navigateThroughSviOglasi.assertionMessageIsReceivedMatchat(textMsg)








})

it('Verify that the User can use the Matchat section of the page when the status of the position advertised is "Inactive".', () => {
  cy.visit(
    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
  ) 
  
  navigateThroughSviOglasi.navigateToAllPositions()
  const inactive = "TestTest23"
  navigateThroughSviOglasi.navigateToInactive(inactive)
  navigateThroughSviOglasi.goToTheMatchesPage()
  navigateThroughSviOglasi.assertionAllMatchesPage()
  navigateThroughSviOglasi.assertionMatchesLinkIsClickable()
  const name = "DALIBOR Ivanovic"
  navigateToMatches.clickOnTheUser(name)
  const message ="Hallo"
  navigateToMatches.chatInputField(message)
  navigateToMatches.chatSendBtn()
  const textMsg = "Hallo"
  navigateThroughSviOglasi.assertionMessageIsReceivedMatchat(textMsg)
  
  
  
  
  
  
  
  
  })







})