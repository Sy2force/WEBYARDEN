describe('Contact Page', () => {
  beforeEach(() => {
    cy.visitAndWait('/contact');
    cy.mockEmailJS();
  });

  it('should load the contact page successfully', () => {
    cy.get('h1').should('contain', 'Contact');
    cy.get('form').should('be.visible');
  });

  it('should have all form fields', () => {
    cy.get('input[name="name"]').should('be.visible');
    cy.get('input[name="email"]').should('be.visible');
    cy.get('input[name="phone"]').should('be.visible');
    cy.get('input[name="company"]').should('be.visible');
    cy.get('textarea[name="message"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should validate required fields', () => {
    cy.get('button[type="submit"]').click();
    cy.get('input[name="name"]:invalid').should('exist');
    cy.get('input[name="email"]:invalid').should('exist');
    cy.get('textarea[name="message"]:invalid').should('exist');
  });

  it('should submit form successfully', () => {
    cy.fillContactForm();
    cy.get('button[type="submit"]').click();
    cy.get('[data-testid="success-message"]').should('be.visible');
  });

  it('should display contact information', () => {
    cy.get('[data-testid="contact-email"]').should('contain', 'contact@webyarden.co.il');
    cy.get('[data-testid="contact-phone"]').should('contain', '+972');
    cy.get('[data-testid="whatsapp-link"]').should('have.attr', 'href').and('include', 'whatsapp');
  });

  it('should have working social media links', () => {
    cy.get('[data-testid="social-links"] a').each(($link) => {
      cy.wrap($link).should('have.attr', 'href');
      cy.wrap($link).should('have.attr', 'target', '_blank');
    });
  });
});
