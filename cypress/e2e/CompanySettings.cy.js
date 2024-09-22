import { navigateThroughSviOglasi } from "../pageObjects/sviOglasi";
import { navigateThroughKreirajOglas } from "../pageObjects/kreirajOglas";
import { navigateToMatches } from "../pageObjects/matchesChat";
import { editDraftPage, navigateToEditDraftPage } from "../pageObjects/EditDraftPAge";
import { navigateThroughProfilKompanije } from "../pageObjects/companyProfile";




describe('Company Profile', () => {


    it('Verify default state for Pregled profila kompanije. ', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.assertionCompanyName()
     navigateThroughProfilKompanije.assertionYearOfFoundation()
     navigateThroughProfilKompanije.assertionNumberOfEmployees()
      
    })

    it('Verify functionality of the "Uredi profil" button.', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.assertionCompanyName()
     navigateThroughProfilKompanije.assertionYearOfFoundation()
     navigateThroughProfilKompanije.assertionNumberOfEmployees()
     navigateThroughProfilKompanije.buttonEditTheProfile()
     navigateThroughProfilKompanije.assertionEditProfilePage()
    })




    it('Verify functionality of sacuvaj button on the Izmeni profil page empty input fields.', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.assertionCompanyName()
     navigateThroughProfilKompanije.assertionYearOfFoundation()
     navigateThroughProfilKompanije.assertionNumberOfEmployees()
     navigateThroughProfilKompanije.buttonEditTheProfile()
     navigateThroughProfilKompanije.assertionEditProfilePage()
     navigateThroughProfilKompanije.inputFieldCompanyNameClear()
     navigateThroughProfilKompanije.inputFieldfoundationYearClear()
     navigateThroughProfilKompanije.inputFieldAdressClear()
     navigateThroughProfilKompanije.inputFieldEmailClear()
     navigateThroughProfilKompanije.inputFieldCompanyAboutClear()
     let team = "Izaberite"
     navigateThroughProfilKompanije.selectFieldNumberOfEmployees(team)
     let city = "Grad"
     navigateThroughProfilKompanije.selectFieldCity(city)
     navigateThroughProfilKompanije.buttonSave()
     navigateThroughProfilKompanije.assertionMandatoryField()

    })





    
    it('Verify functionality of the "Save" button on the Izmeni profil page min values.', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.assertionCompanyName()
     navigateThroughProfilKompanije.assertionYearOfFoundation()
     navigateThroughProfilKompanije.assertionNumberOfEmployees()
     navigateThroughProfilKompanije.buttonEditTheProfile()
     navigateThroughProfilKompanije.assertionEditProfilePage()
     let name = "C"
     navigateThroughProfilKompanije.inputFieldCompanyName(name)
     let year = '1'
     navigateThroughProfilKompanije.inputFieldfoundationYear(year)
     let adress = 'a'
     navigateThroughProfilKompanije.inputFieldAdress(adress)
     let email = 'a'
     navigateThroughProfilKompanije.inputFieldEmail(email)
     let company = 'a'
     navigateThroughProfilKompanije.inputFieldCompanyAbout(company)
     let team = "0-50"
     navigateThroughProfilKompanije.selectFieldNumberOfEmployees(team)
     let city = "Beograd"
     navigateThroughProfilKompanije.selectFieldCity(city)
     navigateThroughProfilKompanije.buttonSave()
     navigateThroughProfilKompanije.assertionFoundationYear()
     navigateThroughProfilKompanije.assertionCompanyEmailBadFormat()

    })




    it('Verify functionality of the "Save" button on the Izmeni profil page max values.', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.assertionCompanyName()
     navigateThroughProfilKompanije.assertionYearOfFoundation()
     navigateThroughProfilKompanije.assertionNumberOfEmployees()
     navigateThroughProfilKompanije.buttonEditTheProfile()
     navigateThroughProfilKompanije.assertionEditProfilePage()
     let name = "McCompany"
     navigateThroughProfilKompanije.inputFieldCompanyName(name)
     let year = '2000'
     navigateThroughProfilKompanije.inputFieldfoundationYear(year)
     let adress = 'Visnjicka 111'
     navigateThroughProfilKompanije.inputFieldAdress(adress)
     let email = '9HV@=!/mX6itAS/niU/yNDGPQQ$#F,FvdZbYY{W5rPWS2M{!ArjRd9m=#?&gy1/$HFwkTxq%#@yLGEQ-xC6H&VUVJ@QN9nd_=zf9'
     navigateThroughProfilKompanije.inputFieldEmail(email)
     let company = '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'

     navigateThroughProfilKompanije.inputFieldCompanyAbout(company)
     let team = "0-50"
     navigateThroughProfilKompanije.selectFieldNumberOfEmployees(team)
     let city = "Beograd"
     navigateThroughProfilKompanije.selectFieldCity(city)
     navigateThroughProfilKompanije.buttonSave()
     
     navigateThroughProfilKompanije.assertionIcorrectEmail()

    })

    it('Verify functionality of the "Save" button on the Izmeni profil page valid values.', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.assertionCompanyName()
     navigateThroughProfilKompanije.assertionYearOfFoundation()
     navigateThroughProfilKompanije.assertionNumberOfEmployees()
     navigateThroughProfilKompanije.buttonEditTheProfile()
     navigateThroughProfilKompanije.assertionEditProfilePage()
     let name = "McCompany"
     navigateThroughProfilKompanije.inputFieldCompanyName(name)
     let year = '2000'
     navigateThroughProfilKompanije.inputFieldfoundationYear(year)
     let adress = 'Visnjicka 111'
     navigateThroughProfilKompanije.inputFieldAdress(adress)
     let email = 'daba83@gmail.com'
     navigateThroughProfilKompanije.inputFieldEmail(email)
     let company = 'It company'

     navigateThroughProfilKompanije.inputFieldCompanyAbout(company)
     let team = "0-50"
     navigateThroughProfilKompanije.selectFieldNumberOfEmployees(team)
     let city = "Beograd"
     navigateThroughProfilKompanije.selectFieldCity(city)
     navigateThroughProfilKompanije.buttonSave()
     
     navigateThroughProfilKompanije.assertionCompanyProfileSuccess()

    })




    it('Verify functionality of "Change your logo" button on the "Modify profile" page.', () => {
      cy.visit(
        "https://staging.company.matchit.rs/login/ac6c3686-da82-49cf-aa9c-625258af1a7f"
      )
     navigateThroughProfilKompanije.buttonCompanyProfile()
     navigateThroughProfilKompanije.assertionHeaderCompanyProfile()
     navigateThroughProfilKompanije.buttonEditTheProfile()
     let pic = '11.jpg'
     cy.get('#logo').attachFile(pic).get('#company-edit-form').submit()
    

    })






})