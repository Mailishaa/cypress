describe('Remove From Cart Tests', () => {
  
  // Open the website before the test runs
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case 8: Remove Product From Cart', () => {
    // Navigate to Products page and add the first product to cart
    cy.contains('Products').click();
    cy.get('.add-to-cart').first().click({ force: true });

    // Open the cart page from the success modal
    cy.contains('u', 'View Cart').click();
    cy.url().should('include', '/view_cart');

    // Click the remove item button (X) for the product row
    cy.get('.cart_quantity_delete').first().click();

    // Verify the product is removed and the cart displays empty text message
    cy.get('#empty_cart').should('be.visible')
      .and('contain', 'Cart is empty!');
    
    // Take screenshot of the empty cart confirmation
    cy.screenshot('The product should no longer appear in the cart');
  });
});
