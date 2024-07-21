describe('Checks navbar functionality', () => {
  const pages = [
    '',
    'games/',
    'other/',
    'contact/',
  ]

  it("Searches for >>Ved's Hub<< button as the first hyperlink in navbar", () => {
    pages.forEach((item, _) => {
      cy.visit(`https://localhost/${item}`);
      cy.get('.navbar').find('a').eq(0).contains("Ved's Hub");
    })
  })

  describe('Checks if every page has "Home", "Games", "Other" and "Contact" buttons with correct links', () => {
    // Home page uses different style of links than the other pages.
    // It links pages directly, while the other pages first go to the parent directory,
    // and only from there navigate to the other pages.
    it('Tests home page', () => {
      cy.visit("https://localhost");
      cy.get('.navbar').find('a').contains('Home').should('have.attr', 'href', '.');
      cy.get('.navbar').find('a').contains('Games').should('have.attr', 'href', 'games/');
      cy.get('.navbar').find('a').contains('Other').should('have.attr', 'href', 'other/');
      cy.get('.navbar').find('a').contains('Contact').should('have.attr', 'href', 'contact/');
    })
  
    it('Tests all pages with expection for home page', () => {
      //All pages with exception for Home page have links that cause going to the 
      //parent directory first, like that: `href="../games".
      pages.forEach((page, _) => {
        if (page === '') {
          return
        }
        cy.visit(`https://localhost/${page}`)
        cy.get('.navbar').find('a').contains('Home').should('have.attr', 'href', '..')
        let addresses = [
          '../games/',
          '../other/',
          '../contact/'
        ]
        addresses.forEach((address, index) => {
          if (page === address.substring(3)) {
            addresses[index] = './'
          }
        })
        cy.get('.navbar').find('a').contains('Games').should('have.attr', 'href', addresses[0])
        cy.get('.navbar').find('a').contains('Other').should('have.attr', 'href', addresses[1])
        cy.get('.navbar').find('a').contains('Contact').should('have.attr', 'href', addresses[2])
      })
    })
  })
})
