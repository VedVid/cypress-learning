describe('Journey of the user using next / prev buttons and search functionality', () => {
  it('Journey', () => {
    // Visit the website
    cy.visit('https://localhost')
    // Try to click on the inactive "Previous" button
    // Yes, "Previous" button has rel="next", most likely
    // it's a weird quirk of specific version of SSG?
    cy.get('[rel="next"]').click()
    cy.url().should('eq', 'https://localhost/')
    // Click on "Next" button
    cy.get('[rel="prev"]').click()
    cy.url().should('contain', '/games/')
    // ...and again...
    cy.get('[rel="prev"]').click()
    cy.url().should('contain', '/other/')
    // ...and again.
    cy.get('[rel="prev"]').click()
    cy.url().should('contain', '/contact/')
    // Try one more time! But this time, url should not change,
    // as the "Next" button is inactive.
    cy.get('[rel="prev"]').click()
    cy.url().should('contain', '/contact/')
    // But moving back should be possible
    cy.get('[rel="next"]').click()
    cy.url().should('contain', '/other/')
    // Now, click on the "Search" button and type full project name in it.
    // After than, links should appear. Click on the correct link.
    cy.get('[data-target="#mkdocs_search_modal"]').click()
    cy.get('input').type('HumFallRL')
    cy.get('a').contains('HumFallRL').click()
    cy.url().should('contain', '/games/')
    cy.get('.bs-sidebar').find('a').contains('HumFallRL').parent().should('have.attr', 'class', 'active')
  })
})
