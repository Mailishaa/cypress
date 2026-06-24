describe('User Registration test', () => {

  const email = `student${Date.now()}@test.com`;
  const testName = 'Tester';
  const testPassword = 'Password123';

  it('should register and delete the user using a timestamped email', () => {
    
    cy.visit('https://automationexercise.com');

    
    cy.contains('a', 'Signup / Login').click();

    
    cy.get("input[data-qa='signup-name']").type(testName);
    cy.get("input[data-qa='signup-email']").type(email); 
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

    
    cy.get("h2[data-qa='account-created']")
      .should('be.visible')
      .and('contain.text', 'Account Created!');
    cy.screenshot('The account created is desplayed');

    
    cy.get("a[data-qa='continue-button']").click();

  
    cy.contains('a', `Logged in as ${testName}`).should('be.visible');
    cy.screenshot('the user is logged in');

    
    cy.contains('a', 'Delete Account').click();

    
    cy.get("h2[data-qa='account-deleted']")
      .should('be.visible')
      .and('contain.text', 'Account Deleted!');
    cy.screenshot('account deletion confirmation screen');

    
    cy.get("a[data-qa='continue-button']").click();
  });
});

