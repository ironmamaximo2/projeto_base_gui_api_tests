

describe('create users api', () => {
    let faker = require('faker-br');
    let nome = faker.name.firstName();
    let email = faker.internet.email();
    let opAdmin = ["true", "false"];
    let administrador = opAdmin[Math.floor(Math.random() * opAdmin.length)];
    let pass=
        faker.random.number({
            'min': 1,
            'max': 9000
        });
    let password = pass.toString()

    it('sucess', () => {
      cy.create_users_api(Cypress.env('url_api'), nome, email, password, administrador)
   
        .then((resp) => {
          expect(resp).property('status').to.equal(201)
          expect(resp).property('statusText').to.equal('Created')
          expect(response.status).to.eq(200)
          //expect(response.body).to.have.length(500)
          //expect(response).to.have.property('message')
          //expect(response).to.have.property('duration')
        })
    })
  })