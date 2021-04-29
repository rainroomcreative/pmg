// HomePage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test


describe('Home Page', () => {
    it('Visits the Landing Page', () => {
      cy.visit('localhost:3000')
    });
    it('Contains Introduction Section', () => {
      cy.get('.sidebar').should('be.visible');
      cy.get('.side-check').click();
      cy.wait(1000);
      cy.get('.august-1').should('be.visible');
      cy.get('#august-2').should('be.visible');
      cy.get('#see-id').should('be.visible');

    });

    it('Contains Services Section', () => {
        cy.get('#services').find('#services-text');
        cy.get('#services').find('.web-card');
        cy.get('#services').find('.wordpress-card');
        cy.get('#services').find('.consulting-card');
        cy.get('#services').find('#about-chevron');
     });

     it('Contains About Section', () => { 
        cy.get('#about').find('.bio-pic');
        cy.get('#about').find('h1');
        cy.get('#about').find('.about-description');
     });

     it('Contains Landing Page Video', () => {
        cy.get('#video').find('source');
     });
  });