// HomePage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Home Page', () => {
    it('Visits the Landing Page', () => {

      if(process.env.NODE_ENV === 'production'){

        cy.visit('02designstudio.com')
      };
      if(process.env.NODE_ENV === 'development'){
  
        cy.visit('localhost:3000')
      };

    });
    it('Contains Introduction Banner', () => {
      cy.get('.banner').should('be.visible');
    });

    it('Contains Services Section', () => {
      cy.get('.sevice-sec').should('be.visible');
     });

     it('Contains Slogan Section', () => { 
      cy.get('.home-techno').should('be.visible');
     });

     it('Contains Offer Section Video', () => {
      cy.get('.we-ofer').should('be.visible');
     });
  });