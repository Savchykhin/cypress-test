
describe('Login page', () => {
    it('should sign in', () => {
      cy.visit('https://www.rawpixel.com/?sort=shuffle&page=1&feed=creative-feed')
      cy.get('#menu-toggle').click()
      cy.get('.menu-wrapper').find('.user-login').click()
      cy.get('#edit-name').type('emma@gmail.com')
      cy.get('#edit-pass').type('emma')
      cy.contains('Log In').click()
    })
  })