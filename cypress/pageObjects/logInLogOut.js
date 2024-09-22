export class logInLogOut { 

///buttons///

submitButton () {
    cy.get('.component__button').click()
}

logOutCompanyProfile() {
    cy.get(".sidebar__dropdown-button")
      .contains("Dalibor")
      .click()
      .then(() => {
        cy.get(".dropdown-item").contains("Odjavi se").click();
      });
  }
//assertions///

assertionMessageSent () {
    cy.get('.mb-4').should('contain','Email with login link has been sent to you')
}

assertionUnregisteredEmail () {
    cy.get('.mb-3').children().children().should('have.text','Za unetu E-mail adresu ne postoji registrovani nalog')
}

assertionInvalidEmailFormat() {
    cy.get('.mb-3').children().children().should('have.text','Neispravan E-mailZa unetu E-mail adresu ne postoji registrovani nalog')
}

assertionEmptyEmailField () {
    cy.get('.mb-3').children().children().should('have.text','Obavezno polje')
}

assertionLoggedOut (){
    cy.get('.fs-4').should('have.text',"Login to continue")
}
///input////

emailInput (email) {
    cy.get('#email').clear().type(email)
}

////email connect///


}





export const navigateThroughLogInLogOut = new logInLogOut();