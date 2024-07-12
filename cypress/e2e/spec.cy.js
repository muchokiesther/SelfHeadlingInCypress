describe('Login Page', () => {
  beforeEach(() => {
    // Visit the local HTML file. Adjust the path if necessary.
    cy.visit('http://127.0.0.1:5500/index.html')
  })

  it('should display the login heading', () => {
    cy.get('h1').should('contain', 'Login')
  })

  it('should have a username input field', () => {
    cy.get('#username').should('exist')
  })

  it('should have a password input field', () => {
    cy.get('#password').should('exist')
  })

  it('should have a submit button', () => {
    cy.get('#submit-button').should('exist')
  })
})