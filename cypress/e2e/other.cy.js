describe('Checks content of "Other projects" page', () => {
  beforeEach(() => {
    cy.visit('https://localhost/other/')
  })

  it('"Other projects" button should be marked as active', () => {
    cy.get('.navbar').get('.active').contains('Other projects').should('exist')
  })

  it('Checks if every sidebar link is valid', () => {
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.get(`[href="${item.attr('href')}"]`).click()
      cy.url().should('contain', `/other/${item.attr('href')}`)
    })
  })

  it('Checks if active links are marked as such in the sidebar', () => {
    cy.get('.bs-sidebar > .nav').find('a').each((item) => {
      cy.get(`[href="${item.attr('href')}"]`).click()
      let className = 'active'
      if (item.text() === 'Other projects') {
        className = 'main active'
      }
      cy.get(`[href="${item.attr('href')}"]`).parent().should('has.attr', 'class', className)
    })
  })
})
