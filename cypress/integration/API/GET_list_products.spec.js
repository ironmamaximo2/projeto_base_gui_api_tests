/// <reference types="Cypress" />

describe('list products', () => {

    let token;
    let id;
    let faker = require('faker-br');
    let nome = faker.name.firstName();
    let email = faker.internet.email();
    let administrador = "true";
    let password = "123456";

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

        cy.login_api(Cypress.env('url_api'), email, password)
            .then((resp) => {
                return new Promise(resolve => {
                    expect(resp).property('status').to.equal(200)
                    token = resp.body['authorization'];
                    resolve(token)
                    // console.log(token)

                })
            })


    })
    afterEach(() => {
        cy.screenshot()
    })

    it('sucess - all', () => {

        cy.list_products_api(Cypress.env('url_api'), token).then((resp) => {

            expect(resp).property('status').to.equal(200)
            expect(resp).property('statusText').to.equal('OK')
            expect(resp.body).to.have.property('quantidade');
            expect(resp.body).to.have.property('produtos');
            expect(resp.body).property('quantidade').to.be.a('number');
            expect(resp.body).to.have.property('produtos').to.be.a('array');
            console.log(resp.body['produtos'])

        })


    })

})
