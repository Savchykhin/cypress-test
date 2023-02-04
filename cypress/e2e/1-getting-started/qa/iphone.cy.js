describe('Apple', function() {
    it('Visits the iPhone page and checks for the iPhone 12 mini', function() {
      cy.visit('https://apple.com/')
  
      cy.get('.ac-gn-link[href="/iphone/"]').click()
  
      cy.url().should('include', '/iphone/')
  
      cy.contains('iPhone 12 mini')
    })
  })
  
  