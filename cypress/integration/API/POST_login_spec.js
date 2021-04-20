describe('login api', () => {

  it('login', () => {
    cy.login_via_api(Cypress.env('url_pes_tel_api'), Cypress.env('cpf_med'), Cypress.env('senha'))
      .then((resp) => {
        expect(resp).property('status').to.equal(200)
        expect(resp).property('statusText').to.equal('OK')
      })
  })
})