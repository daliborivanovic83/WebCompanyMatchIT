export class sviOglasi {

//////assertions////

assertionRestOfTheCandidatesDeck () {
  cy.get('.component__button').should('contain','Pregledaj ostale kandidate')
}


assertionProjectName () {
  cy.get('.component__card').should('contain','')
}

assertionsTechnologies () {
  cy.get('.component__card').should('contain','Iskustvo u tehnologijama')
}

assertionsSalary () {
  cy.get('.component__card').should('contain','Plata i benefiti')
}


assertionsEmploymentTypes () {
  cy.get('.component__card').should('contain','Načini rada')
}





assertionsTechnology () {
  cy.get('.component__card-container').should('contain','Tražene tehnologije')
}


assertionsProjects () {
  cy.get('.mb-3').should('contain','O projektu')
}

assertionsTypesOfEmployments () {
  cy.get('.mb-3').should('contain','Načini rada')
}

assertionsBenefit () {
  cy.get('.mb-3').should('contain','Benefiti')
}

assertionThreadSection () {
  cy.get('.str-chat__thread-header-title').should('contain',"Thread")
}


assertionModifyThePositionPage () {
  cy.get('.header').find('.h3').should('contain','Izmena oglasa')
}

assertionPendingPositionTab() {
  cy.get('.component__badge-indicator-medium ').should('contain','Na čekanju')
}

assertionPositionDetailsTab () {
  cy.get('.nav-link').should('contain','Detalji oglasa')
}

assertionCandidatesLinkIsInactive () {
  cy.get("#job-offer-tab").contains(' Kandidati ').should('have.class','disabled')
}

assertionCandidatesLinkIsActive  () {
  cy.get("#job-offer-tab").contains(' Kandidati ').should('have.class','active')
}
assertionMatchesLinkIsActive() {
  cy.get(".h3").should("have.text",'Poklapanja')
}

assertionExtraMenuIsOpen() {
  cy.get('.dropdown-menu').should("have.class","show")
}

assertionExtraMenuNotDisplayed() {
  cy.get('.dropdown-menu').should("not.have.class","show")
}

assertionEditTheDraftPage () {
  cy.get('.header').find('.h3').should('contain','Izmena drafta')
}

assertionAllPositionsPage () {
  cy.get('.align-items-center').contains('Svi oglasi').should('contain','Svi oglasi')
}

assertionDraftIsSaved () {
  cy.get('.mb-4').contains('Draft je uspešno sačuvan.').should('contain','Draft je uspešno sačuvan.')
}

assertionDraftDeleted () {
  cy.get(".mb-4").contains("Draft je uspešno obrisan.").should("contain","Draft je uspešno obrisan.")
}

assertionMandatoryField() {
  cy.get('.ps-0').contains('Obavezno polje').should('contain','Obavezno polje')
}

assertionArchiveModalVisible () {
  cy.get('.modal-header').contains("Da li ste sigurni?").should('contain','Da li ste sigurni?')
}

assertionAllMatchesPage() {
  cy.get('.mb-0').should("contain","Poklapanja")
}

assertionMatchesLinkIsClickable() {
  cy.get('.job-offer__tab-button').should('have.class',"active").get('[href="#chat-tab"]').click()
}

assertionMessageIsReceivedMatchat (textMsg) {
  cy.get('.str-chat__message-text').last().should('have.text',textMsg)
}


assertionMatchesButtonActive() {
  cy.get('.job-offer__tab-button').should('contain','Poklapanja').should('have.class','active')
};


  /////hover elements//////
  hoverOverTheChatMessageSmile () {
    
    cy.get('.str-chat__message-options').invoke('show').find(".str-chat__message-actions-box-button").eq(0).invoke('show').get('.str-chat__message-reactions-button').eq(0).invoke('show').click()
   }

   hoverOverTheChatMessageExtraMenu () {
    
    cy.get('.str-chat__message-options').invoke('show').find(".str-chat__message-actions-box-button").eq(0).invoke('show').click()
   }
    hoverOverTheChatExtraReplyThreadBtn() {
   cy.get('.str-chat__message-options').invoke('show').find('.str-chat__message-reply-in-thread-button').eq(0).invoke('show').click()

    }

  ////input fields /////

  inputSalaryMax() {
    cy.get('#salary_max').clear().type(2000)
  }

  inputSalaryMin () {
    cy.get('#salary_min').clear().type(1000)
  }

  inputJobtitle () {
    cy.get('#job_offer_title').clear().type('Draft 7333')
  }
  ///this value needs to be changed in order to find the active position in the next run

      ////buttons////

      naviagteToReturnToAllPositions() {
        cy.get('.button-primary').contains('Vrati me na pregled oglasa').click()
      }
      

      navigateToCancelModificationBtn () {
        cy.get('.button-secondary').contains('Odbaci').click()
      }
      navigateToConfirmModificationBtn() {
        cy.get('#create_button').contains('Izmeni').click()
      }

      naviagteToModifyPositionBtn () {
        cy.get('.toolbar-text').contains('Izmeni oglas').click()
      }

  clickOnTheCandidateInTheDeck () {
    cy.get('.channel-preview__content-name').contains('DALIBOR').click() ////name needs to be changed according to the names in the current deck
  }


   removeFromDeckBtn () {
  for(let n = 0; n < 30; n ++) {
    cy.get('#nope').click({force:true})
  }
  
}

addToDeckBtn () {
  for (let n = 0; n < 25; n ++) {
    cy.get('#love').click({force:true})
  }

  
}

addToDeckBtnOnce(){
  for (let n = 0; n < 2; n ++) {
    cy.get('#love').click({force:true})
  }
}

removeFromDeckBtnOnce () {
  for(let n = 0; n < 2; n ++) {
    cy.get('#nope').click({force:true})
  }
}

goToTheRestOfTheCandidatesBtn () {
  cy.get('.component__button').contains('Pregledaj ostale kandidate').click()
}

goToThePositionDetails () {
  cy.get('.job-offer__tab-button').contains('Detalji oglasa').click()
}

goToTheMatchesPage() {
  cy.get('.job-offer__tab-button').wait(1000).contains('Poklapanja').click()
}

  navigateToDropdownTop () {
    cy.get('.button-secondary')
  }
  navigateToAllPositions() {
    cy.get(".sidebar__item-button").contains("Oglasi").click();
  }
  navigateToMatches() {
    cy.get(".sidebar__item-button").contains("Poklapanja").wait(5000).click();
  }

  buttonProfilePage() {
    cy.get(".sidebar__dropdown-button").contains("Dalibor").click();
  }

  buttonCreateAPosition() {
    cy.get(".button-primary").contains("Kreiraj oglas").click();
  }

  buttonProfilRegrutera() {
    cy.get(".sidebar__dropdown-button")
      .contains("Dalibor")
      .click()
      .then(() => {
        cy.get(".dropdown-item").contains("Profil regrutera").click();
      });
  }
   ////buttons/////
  buttonProfilKompanije() {
    cy.get(".sidebar__dropdown-button")
      .contains("Dalibor")
      .click()
      .then(() => {
        cy.get(".dropdown-item").contains("Profil kompanije").click();
      });
  }

  buttonOdjaviSe() {
    cy.get(".sidebar__dropdown-button")
      .contains("Dalibor")
      .click()
      .then(() => {
        cy.get(".dropdown-item").contains("Odjavi se").click();
      });
  }

  buttonKorisnickaPodrska() {
    cy.get(".sidebar__dropdown-button")
      .contains("Dalibor")
      .click()
      .then(() => {
        cy.get(".dropdown-item").contains("Korisnička podrška").click();
      });
  }


  buttonArchive () {
    cy.get('.component__button').get('.fa-ellipsis-h').click({ multiple: true }).get('.fa-archive').click({force:true})
  }
  buttonCopy () {
    cy.get('.component__button').get('.fa-ellipsis-h').click({ multiple: true }).get('.fa-copy').click()
  }
  buttonConfirmArchive () {
    cy.get('.button-danger').contains("Arhiviraj").click().wait(5000)
  }

  buttonConfirmCancel () {
    cy.get('.component__button').contains('Odustani').click({force:true})
  }

  buttonClose () {
    cy.get('.modal-header').find('.btn-close').should('contain','').click({ multiple: true })
  }

  buttonExtraMenu (){
    cy.get('.button-secondary').filter('[data-bs-toggle="dropdown"]').click()
  }

  statusActiveElement () {
    cy.get('.component__badge-indicator-medium').contains('Aktivan').should('contain','Aktivan')
  }
  statusInactiveElement () {
    cy.get('.component__badge-indicator-medium').contains('Neaktivan').should('contain','Neaktivan')
  }

  buttonReturnToAllPositions () {
    cy.get('.button-primary').contains("Vrati me na sve oglase").should('contain',"Vrati me na sve oglase").click()
  }

  buttonArchiveThePosition () {
    cy.get('.dropdown-item').contains("Arhiviraj oglas").should('contain','Arhiviraj oglas').click()
  }
  buttonDuplicateThePosition () {
    cy.get('.dropdown-item').contains("Dupliraj oglas").should('contain','Dupliraj oglas').click()
  }

  ///links svi oglasi page////

  navigateToCandidates() {
    cy.get("#job-offer-tab").first().click().find('.nav-item>.active').should('contain',' Detalji oglasa')
  }

  navigateToCandidatesDeck() {
    cy.get("#job-offer-tab").contains(' Kandidati ').click()
  }
  
//////positions in Svi oglasi section ///////
  navigateToDraft(draft) {
    cy.get(".job-offers_row-title ").contains(draft).click();
  }
  navigateToDraftDelete(draftTwoDelete) {
    cy.get(".job-offers_row-title").contains(draftTwoDelete).click()
  }

  navigateToPending(pending) {
    cy.get(".job-offers_row-title").contains(pending).click();
  }

  navigateToActive(active) {
    cy.get(".job-offers_row-title").contains(active).click();
  }

  navigateToInactive(inactive) {
    cy.get(".job-offers_row-title").contains(inactive).click();
  }

  navigateToDenied() {
    cy.get(".job-offers_row-title").contains("Pozicija test").click();
  }
}
export const navigateThroughSviOglasi = new sviOglasi();
