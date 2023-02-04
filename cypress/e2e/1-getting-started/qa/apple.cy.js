describe('Apple', function() {
    it('Visits the homepage and checks the title', function() {
      cy.visit('https://apple.com/')
  
      cy.title().should('include', 'Apple')
    })
  
    it('Navigates to the MacBook Pro page and checks the product name', function() {
      cy.visit('https://apple.com/')
  
      cy.get('.ac-gn-link[href="/mac/"]').click()
      cy.get('.chapternav-item-macbook-pro > .chapternav-link > .chapternav-icon').click()
  
      cy.url().should('include', '/macbook-pro/')
  
      cy.contains('MacBook Pro')
    })
  })