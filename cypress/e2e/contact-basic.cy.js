describe('Checks content of Contact page, except the contact form itsels', () => {
  beforeEach(() => {
    cy.visit('https://localhost/contact/')
  })

  it('"Contact" button should be marked as active', () => {
    cy.get('.navbar').get('.active').contains('Contact').should('exist')
  })

  it('Page title should be displayed', () => {
    cy.get('h2').contains('Contact').should('exist')
  })

  it('Contact form should be present', () => {
    cy.get('form').should('exist')
  })
})
