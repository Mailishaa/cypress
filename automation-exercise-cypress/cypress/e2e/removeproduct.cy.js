describe('Remove From Cart Tests', () => {
  
  
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case 8: Remove Product From Cart', () => {
    
    cy.contains('Products').click();
    cy.get('.add-to-cart').first().click({ force: true });

  
    cy.contains('u', 'View Cart').click();
    cy.url().should('include', '/view_cart');

    
    cy.get('.cart_quantity_delete').first().click();

    
    cy.get('#empty_cart').should('be.visible')
      .and('contain', 'Cart is empty!');
    cy.screenshot('The cart displays an empty text');
    
    
    cy.screenshot('The product should no longer appear in the cart');
  });
});
