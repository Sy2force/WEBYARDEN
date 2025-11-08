describe('Home Page', () => {
  beforeEach(() => {
    cy.visitAndWait('/');
  });

  it('should load the home page successfully', () => {
    cy.get('h1').should('be.visible');
    cy.get('main').should('exist');
  });

  it('should have proper SEO elements', () => {
    cy.testSEO();
    cy.title().should('not.be.empty');
  });

  it('should be responsive', () => {
    cy.testResponsive();
  });

  it('should have working navigation', () => {
    cy.testNavigation();
  });

  it('should have accessibility features', () => {
    cy.testA11y();
  });

  it('should load within performance thresholds', () => {
    cy.testPerformance();
  });

  it('should have hero section with CTA buttons', () => {
    cy.get('[data-testid="hero-section"]').should('be.visible');
    cy.get('[data-testid="cta-primary"]').should('be.visible');
    cy.get('[data-testid="cta-secondary"]').should('be.visible');
  });

  it('should display featured services', () => {
    cy.get('[data-testid="featured-services"]').should('be.visible');
    cy.get('[data-testid="service-card"]').should('have.length.at.least', 1);
  });

  it('should have working quote simulator', () => {
    cy.testQuoteSimulator();
  });
});
