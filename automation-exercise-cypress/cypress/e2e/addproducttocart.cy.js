describe('Shopping Cart Workflow Tests', () => {
  
  // Open the website before the test runs
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case: Add Product To Cart and Verify Details', () => {
    
    cy.contains('Products').click();
    cy.url().should('include', '/products');


  
    cy.get('.add-to-cart').first().click({ force: true });

    
    cy.contains('u', 'View Cart').click();
    cy.url().should('include', '/view_cart');

    
    cy.get('#cart_info_table').should('be.visible');
    cy.screenshot('The cart grid loaded properly');

    
    cy.get('#cart_info_table tbody tr').first().within(() => {
      cy.get('.cart_description h4 a').should('be.visible'); 
      cy.get('.cart_price p').should('not.be.empty');        
      cy.get('.cart_quantity button').should('not.be.empty'); 
    });

    
    cy.screenshot('The product should be added to the cart successfully');
  });
});
