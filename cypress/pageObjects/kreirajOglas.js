

export class KreirajOglas {

/////assertion////


assertionCreateAPositionPage() {
  cy.get('.me-2').contains('Kreiranje oglasa').should('contain','Kreiranje oglasa')
}




  ////buttons//////
  navigateToKreirajBtn () {
    cy.get(".toolbar-text").contains("Kreiraj").click();
  }

  navigateToDraftBtn () {
    cy.get("#draft_button").contains("Sačuvaj kao draft").click();
  }

  navigateToOdbaciBtn () {
    cy.get(".component__button ").contains("Odbaci").click();
  }

  navigateToNazivPozicije (positionName) {
    cy.get("#job_offer_title").click().clear().type(positionName)
  }

  navigateToChangeDraft () {
    cy.get("#draft_button").contains("Izmeni draft").click();
  }
  /////notifications ///////

  positionSavedAsADraftNotification(){
    cy.get('.mb-4').should('contain','Draft je uspešno sačuvan.')
  }
  returnToAllPositions (){
    cy.get('.component__button').should('contain','Vrati me na sve oglase').click()
  }

  getAJobByName() {
    cy.get(".job-offers_rows").contains("cJUTKkUnGHmNNqnRTGEXUQhFPYjuKLTFwMTMHELqivZyHpMihTSPfXTyAehBxYfEzEFNbjXxcQRLXAFNQjWucbYBryBCvgBzUYRP").click()
  }

  /////Svi oglasi span////
sviOglasi () {
  cy.get('.h3').should('contain','Svi oglasi')
}




///Svi oglasi container////



  ////technology select fields//////
  TechnologyOne(technology, years) {
    cy.get("#technologies_exp-0-technology").select(technology,{ force: true });
    cy.get("#technologies_exp-0-years_of_experience").select(years,{ force: true });
  }

  TechnologyTwo(technology2, years2) {
    cy.get("#technologies_exp-1-technology").select(technology2,{ force: true });
    cy.get("#technologies_exp-1-years_of_experience").select(years2,{ force: true });
  }

  TechnologyThree(technology3, years3) {
    cy.get("#technologies_exp-7-technology").select(technology3);
    cy.get("#technologies_exp-7-years_of_experience").select(years3);
  }
  TechnologyFour(technology4, years4) {
    cy.get("#technologies_exp-8-technology").select(technology4);
    cy.get("#technologies_exp-8-years_of_experience").select(years4);
  }
  TechnologyFive(technology5, years5) {
    cy.get("#technologies_exp-9-technology").select(technology5);
    cy.get("#technologies_exp-9-years_of_experience").select(years5);
  }

  

  addTechnologBtn() {
    cy.get("#form-add-input-button").click();
  }

  projectNameInput() {
    return  cy.get("#project_title")
     
  }
  
////remove tech buttons /////
removeTech5 () {
  cy.get('#technology_5').should("contain", " ").click()
}

removeTech6 () {
cy.get('#technology_6').should("contain", " ").click()
}
removeTech7 () {
cy.get('#technology_7').should("contain", " ").click()
}
removeTech8 () {
cy.get('#technology_8').should("contain", " ").click()
}

removeTech9 () {
cy.get('#technology_9').should("contain", " ").click()
}

////select  field "Izaberite"///

izaberiteFieldValue5 () {
cy.get('#technologies_exp-5-technology').should('contain','Izaberite')
}

izaberiteFieldValue6 () {
cy.get('#technologies_exp-6-technology').should('contain','Izaberite')
}

izaberiteFieldValue7 () {
cy.get('#technologies_exp-7-technology').should('contain','Izaberite')
}

izaberiteFieldValue8 () {
cy.get('#technologies_exp-8-technology').should('contain','Izaberite')
}


izaberiteFieldValue9 () {
cy.get('#technologies_exp-9-technology').should('contain','Izaberite')
}





  //////////// project info /////


  projectOfferName (position) {
    cy.get('#job_offer_title').clear().type(position)
  }
  projectDescriptionInput(projectDescription) {
    cy.get("#project_description").click().clear().type(projectDescription)
  }

  projectState(state) {
    cy.get("#location_country").select(state);
  }

  projectCity(city) {
    cy.get("#location_city").select(city);
  }

  projectIndustry(industry) {
    cy.get("#industry").select(industry);
  }

  projectTeamSize(teamSize) {
    cy.get("#team_size").click().clear().type(teamSize);
  }
  projectWorkEnvOne() {
    cy.get("#work_environment-0").check();
  }

  projectWorkEnvTwo() {
    cy.get("#work_environment-1").check();
  }

  projectWorkEnvThree() {
    cy.get("#work_environment-2").check();
  }

  projectDevelopmentTypeOne() {
    cy.get("#development_type-0").check();
  }

  projectDevelopmentTypeTwo() {
    cy.get("#development_type-1").check();
  }

  projectTypeOne() {
    cy.get("#project_type-0").check();
  }

  projectTypeTwo() {
    cy.get("#project_type-1").check();
  }
/////project salary/////
  projectSalaryMin(min) {
    cy.get("#salary_min").clear().type(min);
  }

  projectSalaryMax(max) {
    cy.get("#salary_max").clear().type(max);
  }
////show salary checkbox/////
  projectShowSalary() {
    cy.get("#show_salary").check();
  }
///// project benefits/////
  projectBenefitsOne() {
    cy.get('#benefit_1').find("#benefits-0").select("Deljenje profita",{ force: true })
  }

  projectBenefitsTwo() {
    cy.get('#benefit_2').find("#benefits-1").select("Dodatna edukacija",{ force: true })
  }

  projectBenefitsThree() {
    cy.get('#benefit_9').find("#benefits-8").select("13. plata", {force: true} )
  }



  addProjectBenefit() {
    cy.get("#add_benefit_button").click();
  }
  ////odraditi dodatne izmene za sve ostale funkcije u sekciji benefiti
  checkSelectedValueBenefitOne () {
    cy.get(`#benefit_1`).should('contain',"Plaćen ručak")
  }

  checkSelectedValueBenefitTwo () {
    cy.get(`#benefit_2`).should('contain',"13. plata")
  }


  checkSelectedValueBenefitThree () {
    cy.get(`#benefit_3`).should('contain',"14. plata")
  }
  /////test za verification of page elements////


  

 


}

export const navigateThroughKreirajOglas = new KreirajOglas();
