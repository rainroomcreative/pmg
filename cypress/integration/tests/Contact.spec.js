// Contact.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
// Aviation.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
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
    it('Visits Contact Landing Page', () => {
      cy.visit('localhost:3000/contact')
    });

   
    it('Contains Contact Form', () => {
        cy.get('#container-loader').find('#contact');
        cy.get('#contact').scrollIntoView().should('be.visible');
    })


    it('takes text in input fields', () => {
      cy.get('#name').type('Test User');
      cy.get('#email').type('info@02pilot.com');
      cy.get('#message').type('Email Form test complete');
      cy.get('#contact').submit();
  })

  });