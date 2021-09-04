


describe('Services Page', () => {
  
  

    it('Visits the Landing Page', () => {
      cy.wait(300)
      cy.visit('localhost:3000/services')
    });
    it('Contains Customer Satisfaction Banner', () => {
      cy.get('.satisfaction').should('be.visible');
    });

    it('Contains "Why Now?" Banner', () => {
        cy.get('.why-now').should('be.visible');
      });

    it('Contains Our Services Section  Section', () => {
      cy.get('.business-succede').should('be.visible');
      cy.get('.design-service').should('be.visible');
      cy.get('.development-service').should('be.visible');
      cy.get('.optimization-service').should('be.visible');
      cy.get('.consulting-service').should('be.visible');
     });

     it('Contains Our Principles Section  Section', () => {
        cy.get('.why-us-image').should('be.visible');
        cy.get('.principles-header').should('be.visible');
        cy.get('.professionalism-image').should('be.visible');
        cy.get('.professionalism-text').should('be.visible');
        cy.get('.affordability-image').should('be.visible');
        cy.get('.affordability-text').should('be.visible');
        cy.get('.customer-service-image').should('be.visible');
        cy.get('.customer-service-text').should('be.visible');
        cy.get('.clean-code-image').should('be.visible');
        cy.get('.clean-code-text').should('be.visible');
       });
  });