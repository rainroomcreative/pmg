// Portfolio.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// HomePage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Home Page', () => {
    it('Visits Portfolio Landing Page', () => {
      cy.visit('localhost:3000/portfolio')
    });

    it('Contains Portfolio Header', () => {
        cy.get('#port').should('be.visible');
    });

    it('Contains Portfolio Items', () => {
        cy.get('.container').find('#portfolio-one');
        cy.get('.container').find('#portfolio-two');
        cy.get('.container').find('#portfolio-three');
        cy.get('.container').find('#portfolio-four');
        cy.get('.container').find('#portfolio-five');
        cy.get('.container').find('#portfolio-six');


        cy.get('#portfolio-one').scrollIntoView().click().should('be.visible');
        cy.get('#pilot-link').click();
        cy.wait(2000);

        cy.get('#portfolio-two').scrollIntoView().click().should('be.visible');
        cy.get('#new-link').click()
        cy.wait(2000);

        cy.visit('localhost:3000/portfolio')
        cy.get('#portfolio-six').scrollIntoView().click().should('be.visible');
        cy.get('#davie-link').click()
        cy.wait(2000)

        cy.get('#portfolio-three').scrollIntoView().click().should('be.visible');
        cy.get('#tea-link').click()
        cy.wait(2000)

        cy.get('#portfolio-four').scrollIntoView().click().should('be.visible');
        cy.get('#broadway-link').click()
        cy.wait(2000)

        cy.get('#portfolio-five').scrollIntoView().click().should('be.visible');
        cy.get('#coffee-link').click()
        
        
      

        

    })
   
  });