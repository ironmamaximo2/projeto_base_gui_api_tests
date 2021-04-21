/// <reference types="Cypress" />

describe('delete users', () => {

    let id;
    const faker = require('faker-br');
    let email = faker.internet.email();
    let opAdmin = ["true", "false"];
    let administrador = opAdmin[Math.floor(Math.random() * opAdmin.length)];
    let pass =
        faker.random.number({
            'min': 1,
            'max': 9000
        });
    let password = pass.toString();
    let nome = faker.name.firstName();
   



    beforeEach(() => {

        cy.create_users_api(Cypress.env('url_api'), nome, email, password, administrador)

            .then((resp) => {
                return new Promise(resolve => {
                    expect(resp).property('status').to.equal(201)
                    expect(resp).property('statusText').to.equal('Created')
                    expect(resp.body).to.have.property('message');
                    expect(resp.body).property('message').to.be.a('string');
                    expect(resp.body).to.contain({
                        message: "Cadastro realizado com sucesso"

                    })
                    id = resp.body['_id'];
                    resolve(id)
                    // console.log(id)
                })
            })


    })
    afterEach(() => {
        cy.screenshot()
    })

    it('sucess', () => {

        cy.delete_users_api(Cypress.env('url_api'), id).then((resp) => {

            expect(resp).property('status').to.equal(200)
            expect(resp.body).to.have.property('message');
            expect(resp.body).property('message').to.be.a('string');
            expect(resp.body).to.contain({
                "message": "Registro excluído com sucesso"
            })

        })

    })

})