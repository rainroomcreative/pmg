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
    it('Visits Aviation Landing Page', () => {
      cy.visit('localhost:3000/aviation-time')
    });

    it('Contains Aviation Header', () => {
        cy.get('.title').should('be.visible');
        cy.get('.click-row').should('be.visible');
    });

    it('Contains Time Table', () => {
        cy.get('#table-section').find('#time-row-id');
        cy.get('#time-row-id').scrollIntoView().should('be.visible');
    })
   
    it('Contains Ratings Table', () => {
        cy.get('#table-section').find('#rating-row-id');
        cy.get('#rating-row-id').scrollIntoView().should('be.visible');
    })
  });