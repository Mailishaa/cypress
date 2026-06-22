describe('Product Detail Verification Tests', () => {
  
  beforeEach(() => {
    // No extra timeouts needed anymore
    cy.visit('https://automationexercise.com');
  });

  it('Test Case: Verify Product Detail Page', () => {
    cy.contains('Products').click();
    cy.url().should('include', '/products');

    cy.get('.choose > .nav > li > a').first().click();
    cy.url().should('include', '/product_details/');

    cy.get('.product-information').within(() => {
      cy.get('h2').should('be.visible');
      cy.contains('Category:').should('be.visible');
      cy.get('span > span').should('be.visible');
      cy.contains('Availability:').should('be.visible');
      cy.contains('Condition:').should('be.visible');
      cy.contains('Brand:').should('be.visible');
    });

    cy.screenshot('The product details page should display full product information');
  });
});
