export class editDraftPage {

/////buttons////

 buttonReject () {
    cy.get('.button-secondary').contains("Odbaci").click()
}
 buttonEraseTheDraft () {
    cy.get('.button-danger').contains('Izbriši draft').click()
}
 buttonEditTheDraft () {
    cy.get('.button-primary').contains('Izmeni draft').click()
}


 buttonCreateAPosition () {
    cy.get('.button-primary').contains('Kreiraj oglas').click()
}


}






export const navigateToEditDraftPage = new editDraftPage ();