export class Matches {
  clickOnTheUser(name) {
    cy.get(".channel-preview__content-name").contains(name).click();
  }

  

  chatInputField(message) {
    cy.get('[placeholder="Type your message"]').clear().type(message);
  }
/////buttons/////

clickOnTheAddPhotoBtn(numberOfAttachments) {
  cy.upload_file("picture.jpg", "image/jpg", 'input[type="file"]');
  
  for (let n = 0; n < numberOfAttachments; n ++) {
    
  cy.get(".str-chat__file-input").attachFile("picture.jpg").wait(3000)
  };

}


  chatSendBtn() {
    cy.get(".chat__icon-button").get('[data-testid="send-button"]').click()
    
  }

  chatProfileCloseBtn() {
    cy.get(".chat__candidate-profile-header").click();
  }

  chatProfileMessage(message) {
    cy.get(".str-chat__message-bubble")
      .contains(message)
      .realHover().get('.str-chat__message-options').first({force:true})
      cy.get(
        ".str-chat__message-reply-in-thread-button"
      ).first()
      .click({force:true});
  }

  chatProfileThreadMessage(message){
    cy.get('.str-chat__thread-header-title').get(".str-chat__message-bubble")
    .contains(message)
    .realHover().get('.str-chat__message-options').first({force:true})
    cy.get(
      ".str-chat__message-reply-in-thread-button"
    ).first()
    .click({force:true});
  }

  chatProfileSmileIcons(message) {
    cy.get(".str-chat__message-bubble")
    .contains(message)
    .realHover().get('.str-chat__message-reactions-button').last().click({force: true}).get(`[aria-label="Select Reaction: Joy"]`).click({force:true}).click({force:true})
  }

  chatProfileSmileIconsDeselect(message) {
    cy.get(".str-chat__message-bubble")
    .contains(message)
    .realHover().get('.str-chat__message-reactions-button').last().click({force: true}).get(`[aria-label="Select Reaction: Joy"]`).click({force:true}).click({force:true})
  }

  threadCloseButton () {

    cy.get('.str-chat__square-button').click()
  }


  

  replyThreadSendButton () {
    cy.get('.str-chat__thread').find('[aria-label="aria/Send"]').wait(4000).click()
  }

  replyThreadAttachButton (numberOfAttachments){
    
      cy.upload_file("picture.jpg", "image/jpg", 'input[type="file"]');
      
      for (let n = 0; n < numberOfAttachments; n ++) {
        
        cy.get('.str-chat__thread').find(".str-chat__file-input").attachFile("picture.jpg").wait(3000)
      
    
    }



    cy.get('.str-chat__thread').find('.str-chat__file-input-label').first().click()
  }


   editButton(){

    cy.get('.str-chat__message-actions-list-item-button').contains('Edit').click({force:true})
  }

  deleteButton(){
    cy.get('.str-chat__message-actions-list-item-button').contains('Delete').click({force:true})
  }

  closeButtonEditMenu(){
    cy.get('[title="Close"]').click()
  }

  editSendButton (){
    cy.get('.str-chat__modal__inner').find('[data-testid="send-button"]').click()
   }

  /////input field////
  replyThreadInputField (text){
    cy.get('.str-chat__thread').find('.str-chat__message-textarea').clear().type(text)
    }

 editInputField(text) {
  cy.get('.str-chat__modal__inner').find('[data-testid="message-input"]').clear().type(text)
 }

 smileIconsExtraMenu(){
  cy.get(`[aria-label="Open Reaction Selector']`).click()
 }

  //// assertions ///


assertionMessageReceived (message) {
  cy.get('.str-chat__message-simple-text-inner').children().last().should("have.text",message)
}
assertionOverTenAttachments (){
  cy.get('.str-chat__list-notifications').should('have.text', "")
}

assertionMessageSent () {
  cy.get('.str-chat__thread').find('[aria-label="aria/Send"]').should('be.disabled')

}

assertionEditClosed(){
  cy.get('[title="Close"]').should('not.have.a.property','[title="Close"]')
}

assertionEditMessageSent(text) {
  cy.get('[data-testid="message-text-inner-wrapper"]').last().should('have.text', text)
}

assertionMessageDeleted(){
  cy.get('.str-chat__message--deleted-inner').last().should('have.text','This message was deleted...')
}

assertionReplyThreadIsOpen(){
  cy.get('.str-chat__thread-header-title').should('have.text','Thread')
}

assertionImageDisplayedInThread()
{ 
  cy.get('.str-chat__attachment-preview-list').should('be.visible')
}

assertionSmileIconDisplayed(){
  cy.get('.str-chat__message-reactions-option-selected').should('have.css',"background-color","rgb(0, 57, 153)")
}

assertionSmileIconNotDisplayed(){
  cy.get('.str-chat__message-reactions-option').should('have.css',"background-color",'rgb(36, 36, 37)') 
}
}

export const navigateToMatches = new Matches();
