describe('Checks navbar functionality', () => {
  const pages = [
    '/',
    '/games/',
    '/other/',
    '/contact/',
  ]

  it("Searches for >>Ved's Hub<< button as the first hyperlink in navbar", () => {
    pages.forEach((item, _) => {
      cy.visit(`https://localhost${item}`);
      cy.get('.navbar').find('a').eq(0).contains("Ved's Hub");
    })
  })

  it.only('Checks if there are buttons for "Home", "Games", "Other projects" and "Contact" pages', () => {
    pages.forEach((item, _) => {
      cy.visit(`https://localhost${item}`);
      cy.get('.navbar').find('a').contains('Home').should('have.attr', 'href');
      cy.get('.navbar').find('a').contains('Games').should('have.attr', 'href');
      cy.get('.navbar').find('a').contains('Other').should('have.attr', 'href');
      cy.get('.navbar').find('a').contains('Contact').should('have.attr', 'href');
    })
  })
})