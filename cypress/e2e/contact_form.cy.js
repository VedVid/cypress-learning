describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://localhost/contact/')
  })

  describe('Check if all form elements are present', () => {
    it('Input field to enter your name should exist', () => {
      cy.get('input').get('[name="yourname"]').should('exist').and('be.visible')
    })

    it('Input field to enter your email address should exist', () => {
      cy.get('input').get('[name="yourmail"]').should('exist').and('be.visible')
    })

    it('Input field to enter your message should exist', () => {
      cy.get('textarea').should('exist').and('be.visible')
    })

    it('Submit button should exist', () => {
      cy.get('[id="contact-submit"]').should('exist').and('be.visible')
    })
  })

  describe('Test placeholders and names', () => {
    it("The placeholder should be present and tell user that's the place to enter their name", () => {
      cy.get('[name="yourname"]').should('have.attr', 'placeholder', 'Your name')
    })

    it("The placeholder should be present and tell user that's the place to enter their name", () => {
      cy.get('[name="yourmail"').should('have.attr', 'placeholder', 'Your email')
    })

    it("The placeholder should be present and tell user that's the place to enter their name", () => {
      cy.get('textarea').should('have.attr', 'placeholder', 'Your message')
    })

    it('Button should have "Submit" label', () => {
      cy.get('[id="contact-submit"]').should('contain', 'Submit')
    })
  })
})
