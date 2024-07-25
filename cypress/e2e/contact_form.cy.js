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

  describe('Test contact form functionality', () => {
    // Unfortunately, it seems that I can't listen to formcarry events here,
    // and no plain info is being displayed on the website.
    // Hence, I rely on the url. When email is shipped, user should be
    // navigated to the formcarry website. If something went wrong, user
    // stays on contact page.
    it('Should not send email if name field is empty', () => {
      cy.get('[name="yourname"]').should('have.value', '')
      cy.get('[name="yourmail"]').type('me@example.com')
      cy.get('[id="contact-submit"]').click()
      cy.url().should('contain', 'localhost/contact/')
    })

    it('Should not send email if email field is empty', () => {
      cy.get('[name="yourname"]').type('guy from the Internet')
      cy.get('[name="yourmail"]').should('have.value', '')
      cy.get('[id="contact-submit"]').click()
      cy.url().should('contain', 'localhost/contact/')
    })

    // Maybe I could use regex here?
    describe('Invalid email addresses', () => {
      beforeEach(() => {
        cy.get('[name="yourname"]').type('guy from the Internet')
      })

      it('Without content before [at]', () => {
        cy.get('[name="yourmail"]').type('@example.com')
        cy.get('[id="contact-submit"]').click()
        cy.url().should('contain', 'localhost/contact/')
      })

      it('Without [at] sign at all', () => {
        cy.get('[name="yourmail"]').type('meexample.com')
        cy.get('[id="contact-submit"]').click()
        cy.url().should('contain', 'localhost/contact/')
      })

      it('Without content after [at]', () => {
        cy.get('[name="yourmail"]').type('me@')
        cy.get('[id="contact-submit"]').click()
        cy.url().should('contain', 'localhost/contact/')
      })
    })
  })
})
