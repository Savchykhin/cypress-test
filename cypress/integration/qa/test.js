describe('Log in', function() {
    it('Sing in', function() {
      cy.visit('https://www.office.com/')
      cy.contains('Sign in').click()
      cy.get('imput[type="email"]').type('emma@gmail.com{enter}')
      //cy.get('imput[type="email"]').type('emma@gmail.com').click()
      cy.get('imput[type="submit"]').click()
    })
  })
