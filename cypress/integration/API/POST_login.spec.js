describe('login api', () => {

  it('sucess', () => {
    cy.login_api(Cypress.env('url_api'), Cypress.env('email'), Cypress.env('password'))
      .then((resp) => {
        expect(resp).property('status').to.equal(200);
        expect(resp).property('statusText').to.equal('OK');
        expect(resp.body).to.have.property('message');
        expect(resp.body).to.have.property('authorization');
        expect(resp.body).property('message').to.be.a('string');
        expect(resp.body).to.contain({
          "message": "Login realizado com sucesso"

        })


      })
  })

  it('invalid email', () => {
    cy.login_api(Cypress.env('url_api'), "email.inval.com", Cypress.env('password'))
      .then((resp) => {
        expect(resp).property('status').to.equal(400);
        console.log(resp.body)
        expect(resp.body).to.contain({
          email: "email deve ser um email válido"

        })


      })
  })
})