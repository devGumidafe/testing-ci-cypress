describe('Hotel collection specs', () => {
  it('should fetch hotel list and show it in screen when visit /hotel-collection url', () => {
    // Act
    cy.loadAndVisit('/hotel-collection', [{ path: '/api/hotels' }]);

    // Assert
    cy.findAllByRole('listitem').should('have.length', 10);
  });

  it('should fetch hotel list greater than 0 when visit /hotel-collection url', () => {
    // Act
    cy.loadAndVisit('/hotel-collection', [{ path: '/api/hotels' }]);

    // Assert
    cy.findAllByRole('listitem').should('have.length.greaterThan', 0);
  });

  it('should fetch two hotels when visit /hotel-collection url', () => {
    // Arrange
    /* cy.fixture('hotels').then((hotels) => {
      cy.intercept('GET', '/api/hotels', hotels);
    }); */

    // Act
    cy.loadAndVisit('/hotel-collection', [
      { path: '/api/hotels', fixture: 'hotels.json' },
    ]);

    // Assert
    cy.findAllByRole('listitem').should('have.length', 2);
  });

});
