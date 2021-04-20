describe('login api', () => {

  it('sucess', () => {
    cy.login_api(Cypress.env('url_api'), Cypress.env('email'), Cypress.env('password'))
      .then((resp) => {
        expect(resp).property('status').to.equal(200)
        expect(resp).property('statusText').to.equal('OK')
      })
  })
})