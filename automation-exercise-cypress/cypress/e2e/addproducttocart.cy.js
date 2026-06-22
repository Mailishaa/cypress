describe('Shopping Cart Workflow Tests', () => {
  
  // Open the website before the test runs
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case: Add Product To Cart and Verify Details', () => {
    // Navigate to Products page
    cy.contains('Products').click();
    cy.url().should('include', '/products');

    // Hover or trigger action to click 'Add to cart' on the first visible product card
    // Using force: true ensures interaction even if overlapping elements exist
    cy.get('.add-to-cart').first().click({ force: true });

    // Click 'View Cart' link inside the success confirmation modal popup
    cy.contains('u', 'View Cart').click();
    cy.url().should('include', '/view_cart');

    // Verify the cart table grid loaded properly
    cy.get('#cart_info_table').should('be.visible');

    // Target the first product row inside the cart structure
    cy.get('#cart_info_table tbody tr').first().within(() => {
      cy.get('.cart_description h4 a').should('be.visible'); // Selected product is visible
      cy.get('.cart_price p').should('not.be.empty');        // Price is displayed
      cy.get('.cart_quantity button').should('not.be.empty'); // Quantity is displayed
    });

    // Take screenshot of the validated cart contents
    cy.screenshot('The product should be added to the cart successfully');
  });
});
