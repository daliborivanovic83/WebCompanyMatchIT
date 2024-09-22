export class ProfilKompanije { 


/////buttons//////
buttonCompanyProfile() {
    cy.get(".sidebar__dropdown-button")
      .contains("Dalibor")
      .click()
      .then(() => {
        cy.get(".dropdown-item").contains("Profil kompanije").click();
      });
  }
buttonEditTheProfile() {
  cy.get('.button-primary').should('contain',"Uredi profil").click()
}

buttonSave () {
  cy.get('.button-primary').get('[form="company-edit-form"]').click()
}
buttonProfileLogo() {
  cy.get('.upload-company-logo-label').click()
}


  ////assertions////
assertionHeaderCompanyProfile () {
    cy.get('.h3').should('have.text','Pregled profila kompanije')
}


assertionYearOfFoundation() {

    cy.get('.table-borderless').first().find('td').first().should('contain','Godina osnivanja')
}

assertionCompanyName () {
  cy.get(".text-left").should('contain','McCompany')
}

assertionNumberOfEmployees () {
  cy.get("tr").children().should('contain',' 0 - 50')
}


assertionEditProfilePage() {
  cy.get('.mb-0').should('contain','Izmena kompanije')
}

assertionMandatoryField () {
  cy.get('li').should('contain','Obavezno polje')
}

assertionFoundationYear () {
  cy.get('li').should('contain','Broj mora biti od 1900 do 2024')
}

assertionCompanyEmailBadFormat () {
cy.get('li').should('contain','Neispravan E-mail')
cy.get('li').should('contain','Broj karaktera mora biti između 5 i 100')
}

assertionIcorrectEmail () {
  cy.get('li').should('contain','Neispravan E-mail') 
}

assertionCompanyProfileSuccess() {
  cy.get('.mb-4').should('contain','Profil kompanije je uspešno izmenjen.')
}





////input  fields/////

inputFieldCompanyNameClear () {
cy.get('#name').clear()
}

inputFieldCompanyName (name) {
  cy.get('#name').clear().type(name)
  }

inputFieldfoundationYearClear () {
  cy.get('#founded').clear()
  }

  inputFieldfoundationYear (year) {
    cy.get('#founded').clear().type(year)
    }


  inputFieldAdressClear () {
    cy.get('#address').clear()
    }


    inputFieldAdress (adress) {
      cy.get('#address').clear().type(adress)
      }

    inputFieldEmailClear () {
      cy.get('#email').clear()
      }

      inputFieldEmail (email) {
        cy.get('#email').clear().type(email)
        }

      inputFieldCompanyAboutClear () {
        cy.get('#about').clear()
        }

        inputFieldCompanyAbout (about) {
          cy.get('#about').clear().type(about)
          }

        selectFieldNumberOfEmployees (team) {
          cy.get('#team_size').select(team)
        }
        selectFieldCity (city) {
          cy.get('#city').select(city)
        }



}

export const navigateThroughProfilKompanije = new ProfilKompanije();