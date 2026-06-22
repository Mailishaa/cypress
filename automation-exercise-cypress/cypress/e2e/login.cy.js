describe('Part 3: User Registration Test', () => {

  beforeEach(() => {
    cy.visit('https://automationexercise.com');
  });
  it('Test Case 3: Login With Valid Credentials', () => {
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type('kuda@gmail.com');
    cy.get('[data-qa="login-password"]').type('Password123!');
    cy.get('[data-qa="login-button"]').click();
    cy.contains('Logged in as').should('be.visible');
    cy.contains('Logout').click();
    cy.url().should('include', '/login');


  });

});