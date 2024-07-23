describe('Checks content of "Other projects" page', () => {
  beforeEach(() => {
    cy.visit('https://localhost/other/')
  })

  it('"Other projects" button should be marked as active', () => {
    cy.get('.navbar').get('.active').contains('Other projects').should('exist')
  })

  it('Checks if every sidebar link is valid', () => {
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.visit(`https://localhost/other/${item.attr('href')}`)
    })
  })
})
