

describe('create users api', () => {
    let faker = require('faker-br');
    let nome = faker.name.firstName();
    let email = faker.internet.email();
    let opAdmin = ["true", "false"];
    let administrador = opAdmin[Math.floor(Math.random() * opAdmin.length)];
    let pass =
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
                expect(resp.body).to.have.property('message');
                expect(resp.body).to.have.property('_id');
                expect(resp.body).property('message').to.be.a('string');
                expect(resp.body).to.contain({
                    "message": "Cadastro realizado com sucesso"

                })
            })
    })


})

describe('create users api - errors', () => {
    const faker = require('faker-br');
    let nome = faker.name.firstName();
    let email = faker.internet.email();
    let opAdmin = ["true", "false"];
    let administrador = opAdmin[Math.floor(Math.random() * opAdmin.length)];
    let pass =
        faker.random.number({
            'min': 1,
            'max': 9000
        });
    let password = pass.toString()

    beforeEach(() => {

        cy.create_users_api(Cypress.env('url_api'), nome, email, password, administrador)

            .then((resp) => {
                expect(resp).property('status').to.equal(201)
                expect(resp).property('statusText').to.equal('Created')
                expect(resp.body).to.have.property('message');
                expect(resp.body).property('message').to.be.a('string');
                expect(resp.body).to.contain({
                    message: "Cadastro realizado com sucesso"

                })
            })



    })


    it('user already registered', () => {
        cy.create_users_api(Cypress.env('url_api'), nome, email, password, administrador)

            .then((resp) => {
                expect(resp).property('status').to.equal(400)
                expect(resp).property('statusText').to.equal('Bad Request')
                expect(resp.body).to.contain({
                    message: "Este email já está sendo usado"

                })
            })
    })


})