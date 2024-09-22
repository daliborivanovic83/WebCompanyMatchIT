import { navigateThroughSviOglasi } from "../pageObjects/sviOglasi";
import { navigateThroughKreirajOglas } from "../pageObjects/kreirajOglas";
import { navigateToMatches } from "../pageObjects/matchesChat";
import { editDraftPage, navigateToEditDraftPage } from "../pageObjects/EditDraftPAge";
import { navigateThroughProfilKompanije } from "../pageObjects/companyProfile";
import {  navigateThroughLogInLogOut } from "../pageObjects/logInLogOut";




describe ('MatchesChat ', ()=> {


    it("Verify that the can user receive a message if the status of the position is Active", ()=> {

        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )

        navigateThroughSviOglasi.navigateToMatches()
        let name = "Tijana"
        navigateToMatches.clickOnTheUser(name)
        let message = '2222'
       
        navigateToMatches.assertionMessageReceived(message)
        })

        it('Verify that the user can send attachments with the attachment button in the matchat section.', () =>{
            cy.visit(
                "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
              
            )
            navigateThroughSviOglasi.navigateToMatches()
            let numberOfAttachments = 8
            navigateToMatches.clickOnTheAddPhotoBtn(numberOfAttachments)
        })

       
            it('Verify that the user can send attachments with the attachment button in the matchat section max 10', () =>{
                cy.visit(
                    "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
                  
                )
                navigateThroughSviOglasi.navigateToMatches()
                let numberOfAttachments = 14
                navigateToMatches.clickOnTheAddPhotoBtn(numberOfAttachments) 
                 navigateToMatches.chatSendBtn()
                navigateToMatches.assertionOverTenAttachments()
        })

        it('Verify that the user can  close the reply option in the message section by clicking on the close button.',()=>{

            cy.visit(
                "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
              
            )
            navigateThroughSviOglasi.navigateToMatches()
            let message = "..."
            navigateToMatches.chatProfileMessage(message)
            navigateToMatches.threadCloseButton()
            

        })

        it('Verify that the user can  use the extra options for a message sent by using the Reply button.',()=>{
           
            cy.visit(
                "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
              
            )
            navigateThroughSviOglasi.navigateToMatches()
            const message = "..."
            navigateToMatches.chatProfileMessage(message)
            navigateToMatches.replyThreadInputField(message)
            navigateToMatches.replyThreadSendButton()
            navigateToMatches.assertionMessageSent()
        })
        





        it('Verify that the user can  use the extra options for a message sent by using the Reply button.',()=>{
           
            cy.visit(
                "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
              
            )
            navigateThroughSviOglasi.navigateToMatches()
            const message = "..."
            navigateToMatches.chatProfileMessage(message)
            let numberOfAttachments= 1
            navigateToMatches.replyThreadAttachButton(numberOfAttachments)
            
            navigateToMatches.replyThreadSendButton()
            navigateToMatches.assertionMessageSent()
        })

        

        it('Verify that the user can stop the editing proces on the already sent message in the chat menu using the Close button.',()=>{
           
            cy.visit(
                "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
              
            )
            navigateThroughSviOglasi.navigateToMatches()
            const message = "..."
            navigateToMatches.chatProfileMessage(message)
            navigateToMatches.editButton()
            navigateToMatches.closeButtonEditMenu()
            navigateToMatches.assertionEditClosed()
           
        })
        
     it('Verify that the user can edit an already sent message in the chat menu using the Edit button.',()=>{
        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."
        navigateToMatches.chatProfileMessage(message)
        navigateToMatches.editButton()
        let text = "..."
        navigateToMatches.editInputField(text)
        navigateToMatches.editSendButton()
        navigateToMatches.assertionEditMessageSent(text)
    
    })

    it('Verify that the user can delete an already sent message in the chat menu using the Delete button.',()=>{


        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
        navigateToMatches.deleteButton()
        navigateToMatches.assertionMessageDeleted()

    })

    it("Verify that the user can create a thread using the Thread reply button.",()=>{


        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
        navigateToMatches.chatProfileMessage("...")
        navigateToMatches.assertionReplyThreadIsOpen()
    })

    it('Verify that the user can send messages in the thread section send an image as a message.',()=>{
        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
        navigateToMatches.chatProfileMessage("...")
        let numberOfAttachments = 10
        navigateToMatches.replyThreadAttachButton(numberOfAttachments)
        navigateToMatches.assertionImageDisplayedInThread()
        navigateToMatches.replyThreadSendButton()
    })



    it('Verify that the user can ad an emoticon to the chosen message in the chatbox.',()=>{
        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
       
        navigateToMatches.chatProfileSmileIcons(message)

    navigateToMatches.assertionSmileIconDisplayed()
    })
    


    it('Verify that the user can remove the emoticon from the chosen message in the chatbox.',()=>{
        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
       
        navigateToMatches.chatProfileSmileIconsDeselect(message)
        navigateToMatches.assertionSmileIconNotDisplayed()
    })

    it('Verify that the user can add the emoticon to the chosen message in the Thread section.',()=>{
        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
        navigateToMatches.chatProfileMessage("...")
        navigateToMatches.assertionReplyThreadIsOpen()
        navigateToMatches.chatProfileThreadMessage(message)
       
        navigateToMatches.chatProfileSmileIcons(message)
        navigateToMatches.assertionSmileIconDisplayed()
    })

    it('Verify that the user can remove the emoticon from the chosen message in the Thread.',()=>{
        cy.visit(
            "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
          
        )
        navigateThroughSviOglasi.navigateToMatches()
        const message = "..."////this value needs to be changed according to the text in the chat 
        navigateToMatches.chatProfileMessage(message)
        navigateToMatches.chatProfileMessage("...")
        navigateToMatches.assertionReplyThreadIsOpen()
        navigateToMatches.chatProfileThreadMessage(message) 
      
        navigateToMatches.chatProfileSmileIconsDeselect(message)
        navigateToMatches.assertionSmileIconNotDisplayed()

    })
})