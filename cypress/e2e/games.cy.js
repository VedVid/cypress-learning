describe('Checks content of Game page', () => {
  it('Checks if every sidebar link is valid', () => {
    cy.visit('https://localhost/games/')
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.visit(`https://localhost/games/${item.attr('href')}`)
    })
  })
})
