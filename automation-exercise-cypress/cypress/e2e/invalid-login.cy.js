describe('Invalid Login Tests', () => {
  
  // Open the website before the test runs
  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });

  it('Test Case 4: Login With Invalid Credentials', () => {
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type('wrong_email@example.com');
    cy.get('[data-qa="login-password"]').type('NotTheRealPassword');
    cy.get('[data-qa="login-button"]').click();
    
    
    cy.contains('Your email or password is incorrect!').should('be.visible');
    cy.screenshot('An error message is displayed when a user tries to login with invalid credentials');
  });
});
