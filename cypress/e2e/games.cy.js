describe('Checks content of Game page', () => {
  beforeEach(() => {
    cy.visit('https://localhost/games/')
  })

  it('"Games" button should be marked as active', () => {
    cy.get('.navbar').get('.active').contains('Games').should('exist')
  })

  it('Checks if every sidebar link is valid', () => {
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.get(`[href="${item.attr('href')}"]`).click()
      cy.url().should('contain', `/games/${item.attr('href')}`)
    })
  })

  it('Checks if active links are marked as such in the sidebar', () => {
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.get(`[href="${item.attr('href')}"]`).click()
      let className = 'active'
      if (item.text() === 'Games') {
        className = 'main active'
      }
      cy.get(`[href="${item.attr('href')}"]`).parent().should('has.attr', 'class', className)
    })
  })
})
