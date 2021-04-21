const faker = require('faker-br');
let nome = faker.name.firstName();
let email = faker.internet.email();
let administrador = "true";
let password = "123456";

describe('login api', () => {


  beforeEach(() => {

    cy.create_users_api(Cypress.env('url_api'), nome, email, password, administrador)

      .then((resp) => {

        expect(resp).property('status').to.equal(201)


      })


  })

  it('sucess', () => {
    cy.login_api(Cypress.env('url_api'), email, password)
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

})

describe('login api error', () => {


  beforeEach(() => {


  })


  it('invalid email', () => {
    cy.login_api(Cypress.env('url_api'), "email.inval.com", password)
      .then((resp) => {
        expect(resp).property('status').to.equal(400);
        console.log(resp.body)
        expect(resp.body).to.contain({
          email: "email deve ser um email válido"

        })


      })
  })
})