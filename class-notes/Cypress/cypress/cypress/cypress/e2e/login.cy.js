describe('login test', () => {
  it('login', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="loginHeader"]').should('be.visible').contains('recipe')
    cy.get('[data-test="loginName"]').should('be.visible').type('Anthony')
    cy.get('[data-test="loginPassword"]').should('be.visible').type('Clarusway')
    cy.get('[data-test="loginSbmt"]').should('be.visible').click()
    cy.url().should('include', '/home')
  })

})