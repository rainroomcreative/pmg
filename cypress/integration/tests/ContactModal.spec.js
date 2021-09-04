// Contact.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// Aviation.spec.js created with Cypress
//


describe('Home Page', () => {

  

    it('Visits Contact Landing Page', () => {

      cy.wait(300)
      
      cy.visit('localhost:3000')

    });

    it('Clicks Contact Us button in header', () => {
      cy.get('.contact-modal').click()
    });

    it('Contact Modal Renders', () => {
      cy.get('.customodal').should('be.visible');
    });
    
    // it('Submits form and notification renders', () => {
    //   cy.get('.customodal').should('be.visible');
    // });

    // it('Checks Recaptcha', () => {
    //   cy.get('.customodal').should('be.visible');
    // });

   

  });