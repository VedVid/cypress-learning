describe('Checks content of Game page', () => {
  beforeEach(() => {
    cy.visit('https://localhost/games/')
  })

  it('"Games" button should be marked as active', () => {
    cy.get('.navbar').get('.active').contains('Games').should('exist')
  })

  it('Checks if every sidebar link is valid', () => {
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.visit(`https://localhost/games/${item.attr('href')}`)
    })
  })
})
