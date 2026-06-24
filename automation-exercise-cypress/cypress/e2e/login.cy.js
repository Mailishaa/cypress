describe('Automation Exercise Authentication Flow', () => {
  const dynamicEmail = `student${Date.now()}@test.com`;
  const testName = 'Tester';
  const testPassword = 'Password123!';

  before(() => {
    cy.visit('https://automationexercise.com');
    cy.contains('a', 'Signup / Login').click();
    cy.get("input[data-qa='signup-name']").type(testName);
    cy.get("input[data-qa='signup-email']").type(dynamicEmail); 
    cy.get("button[data-qa='signup-button']").click();
    cy.get('#id_gender1').check();
    cy.get('#password').type(testPassword);
    cy.get('#days').select('3');
    cy.get('#months').select('January');
    cy.get('#years').select('2004');
    cy.get('#first_name').type('Mailisha');
    cy.get('#last_name').type('Awuor');
    cy.get('#address1').type('100 Nairobi');
    cy.get('#country').select('India');
    cy.get('#state').type('Mumbai');
    cy.get('#city').type('Mumbai');
    cy.get('#zipcode').type('90001');
    cy.get('#mobile_number').type('+12135550199');
    cy.get("button[data-qa='create-account']").click();
    cy.get("h2[data-qa='account-created']").should('be.visible').and('contain.text', 'Account Created!');
    cy.get("a[data-qa='continue-button']").click();
    cy.contains('a', 'Logout').click();
  });

  it('Test Case 3: Login With Valid Credentials', () => {
    cy.visit('https://automationexercise.com');
    cy.contains('Signup / Login').click();
    cy.get('[data-qa="login-email"]').type(dynamicEmail);
    cy.get('[data-qa="login-password"]').type(testPassword);
    cy.get('[data-qa="login-button"]').click();
    cy.get('.shop-menu').should('contain.text', 'Logged in as');
    cy.screenshot('User is logged in');
    cy.contains('Logout').click();
    cy.url().should('include', '/login');
    cy.screenshot('User is logged out');
  });

  
});
