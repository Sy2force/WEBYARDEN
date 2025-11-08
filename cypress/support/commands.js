// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Custom commands for Web Yarden testing

// Command to visit a page and wait for it to load
Cypress.Commands.add('visitAndWait', (url, options = {}) => {
  cy.visit(url, options);
  cy.get('body').should('be.visible');
  cy.wait(500); // Wait for animations/transitions
});

// Command to test responsive design
Cypress.Commands.add('testResponsive', (sizes = ['iphone-6', 'ipad-2', 'macbook-15']) => {
  sizes.forEach((size) => {
    cy.viewport(size);
    cy.wait(500);
    // Add specific responsive tests here
  });
});

// Command to fill contact form
Cypress.Commands.add('fillContactForm', (data = {}) => {
  const defaultData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+972501234567',
    company: 'Test Company',
    message: 'This is a test message for the contact form.',
  };
  
  const formData = { ...defaultData, ...data };
  
  cy.get('input[name="name"]').type(formData.name);
  cy.get('input[name="email"]').type(formData.email);
  cy.get('input[name="phone"]').type(formData.phone);
  cy.get('input[name="company"]').type(formData.company);
  cy.get('textarea[name="message"]').type(formData.message);
});

// Command to test navigation
Cypress.Commands.add('testNavigation', () => {
  // Test main navigation links
  const navLinks = [
    { text: 'Accueil', url: '/' },
    { text: 'Services', url: '/services' },
    { text: 'Tarifs', url: '/tarifs' },
    { text: 'Projets', url: '/projets' },
    { text: 'À propos', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ];
  
  navLinks.forEach((link) => {
    cy.get('nav').contains(link.text).click();
    cy.url().should('include', link.url);
    cy.go('back');
  });
});

// Command to test accessibility
Cypress.Commands.add('testA11y', () => {
  // Basic accessibility checks
  cy.get('h1').should('exist');
  cy.get('main').should('exist');
  cy.get('nav').should('exist');
  
  // Check for alt attributes on images
  cy.get('img').each(($img) => {
    cy.wrap($img).should('have.attr', 'alt');
  });
  
  // Check for proper heading hierarchy
  cy.get('h1').should('have.length.at.least', 1);
});

// Command to test performance
Cypress.Commands.add('testPerformance', () => {
  cy.window().then((win) => {
    const performance = win.performance;
    const navigation = performance.getEntriesByType('navigation')[0];
    
    // Check page load time (should be under 3 seconds)
    expect(navigation.loadEventEnd - navigation.fetchStart).to.be.lessThan(3000);
  });
});

// Command to mock EmailJS
Cypress.Commands.add('mockEmailJS', () => {
  cy.window().then((win) => {
    win.emailjs = {
      send: cy.stub().resolves({ status: 200, text: 'OK' }),
      init: cy.stub(),
    };
  });
});

// Command to test quote simulator
Cypress.Commands.add('testQuoteSimulator', () => {
  // Open quote simulator
  cy.get('[data-testid="quote-button"]').click();
  
  // Add a service
  cy.get('[data-testid="add-service"]').first().click();
  
  // Check if item was added
  cy.get('[data-testid="quote-items"]').should('contain', 'service');
  
  // Test remove functionality
  cy.get('[data-testid="remove-item"]').first().click();
  cy.get('[data-testid="quote-items"]').should('not.contain', 'service');
});

// Command to test SEO elements
Cypress.Commands.add('testSEO', () => {
  // Check meta tags
  cy.get('head meta[name="description"]').should('exist');
  cy.get('head meta[property="og:title"]').should('exist');
  cy.get('head meta[property="og:description"]').should('exist');
  cy.get('head meta[property="og:image"]').should('exist');
  
  // Check structured data
  cy.get('head script[type="application/ld+json"]').should('exist');
  
  // Check canonical URL
  cy.get('head link[rel="canonical"]').should('exist');
});

// Example of overwriting an existing command
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
//   return originalFn(url, { ...options, timeout: 30000 });
// });
