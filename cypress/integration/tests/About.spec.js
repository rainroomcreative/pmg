


describe('About Page', () => {
  


  it('Visits About Page', () => {
    cy.wait(300)
    
    cy.visit('localhost:3000/about')
    
  });


  it('Contains About Banner', () => {
    cy.get('.about-banner').should('be.visible');
  });



    it('Contains What We offer Section  Section', () => {
      cy.get('.we-ofer').should('be.visible');
     });
});