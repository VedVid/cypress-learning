describe('Journey of the user via direct links', () => {
  it('Journey', () => {
    // Visit the website
    cy.visit('https://localhost')
    // Click on the "Games" button at the top bar
    cy.get('.navbar').find('a').contains('Games').click()
    cy.url().should('contain', '/games/')
    // Scroll into "About The Kid..." game.
    cy.get('#about-the-kid-who-stole-the-relics-back').scrollIntoView()
    cy.get('.bs-sidebar').find('a').contains('Kid Who Stole').parent().should('have.attr', 'class', 'active')
    // Click on "Tiny Gatherer" at the sidebar
    cy.get('.bs-sidebar').find('a').contains('Tiny Gatherer').click()
    cy.get('.bs-sidebar').find('a').contains('Tiny Gatherer').parent().should('have.attr', 'class', 'active')
    // Click on the "Other projects"
    cy.get('.navbar').find('a').contains('Other projects').click()
    cy.url().should('contain', '/other/')
    // Scroll to the bottom
    cy.scrollTo('bottom')
    cy.get('.bs-sidebar').find('a').contains('Microblog').parent().should('have.attr', 'class', 'active')
    // Click on the "Contact" button at the top bar
    cy.get('.navbar').find('a').contains('Contact').click()
    cy.url().should('contain', '/contact/')
  })
})