


describe('Portfolio Page', () => {

    
    it('Visits Portfolio Landing Page', () => {
        
      cy.wait(300)

      if(process.env.NODE_ENV === 'production'){

        cy.visit('02designstudio.com/portfolio')
      };
      if(process.env.NODE_ENV === 'development'){
  
        cy.visit('localhost:3000/portfolio')
      };
    });

  
    it('Contains Portfolio Banner', () => {
      cy.get('.portfolio-intro').should('be.visible');
      cy.get('.our-work-header').should('be.visible');
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