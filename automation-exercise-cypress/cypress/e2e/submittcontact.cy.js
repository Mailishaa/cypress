describe('Contact Us Form Tests', () => {
  
  beforeEach(() => {
    // Will load instantly once blockHosts is configured
    cy.visit('https://automationexercise.com');
  });

  it('Test Case: Submit Contact Us Form', () => {
    cy.contains('Contact us').click();
    cy.url().should('include', '/contact_us');

    cy.get('[data-qa="name"]').type('John Doe');
    cy.get('[data-qa="email"]').type('johndoe@example.com');
    cy.get('[data-qa="subject"]').type('Support Request');
    cy.get('[data-qa="message"]').type('This is a test message for automation verification.');

    cy.get('input[name="upload_file"]').selectFile({
      contents: Cypress.Buffer.from('mock file content'),
      fileName: 'test_file.txt',
      mimeType: 'text/plain',
    });

    cy.on('window:confirm', (text) => {
      expect(text).to.contains('Press OK to proceed');
      return true; 
    });

    cy.get('[data-qa="submit-button"]').click();

    cy.get('.status.alert.alert-success').should('be.visible')
      .and('contain', 'Success! Your details have been submitted successfully.');

    cy.screenshot('The contact form should submit successfully');
  });
});
