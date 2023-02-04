describe('Google search', function() {
  it('Searches for "Cypress.io"', function() {
    cy.visit('https://google.com')

    cy.get('input[name="q"]').type('Cypress.io{enter}')

    cy.contains('Cypress.io')
  })
})