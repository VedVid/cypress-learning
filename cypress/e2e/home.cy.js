describe('Checks home page', () => {
  beforeEach(() => {
    cy.visit('https://localhost')
  })

  it('"Home" button should be marked as active', () => {
    cy.get('.navbar').get('.active').contains("Home").should("exist");
  })

  it('Hyperlink to LinedIn should be valid', () => {
    cy.get('[href="https://www.linkedin.com/in/tomasz-nowakowski-686a17115/"]')
  })

  it('Hyperlink to itch.io should be valid', () => {
    cy.get('[href="https://vedor.itch.io/"]')
  })

  it("Hyperlink to GitHub should be valid", () => {
    cy.get('[href="https://github.com/VedVid"]')
  })
})