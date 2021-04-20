/// <reference types="Cypress" />

describe('create product', () => {

    let token;
    let faker = require('faker-br');
    let nome = faker.name.firstName();
    let descricao = faker.random.words(4);
    let prec =
        faker.random.number({
            'min': 10,
            'max': 9000
        });
    let preco = prec.toString()
    let quant =
        faker.random.number({
            'min': 1,
            'max': 50
        });
    let quantidade = quant.toString()



    beforeEach(() => {

        cy.login_api(Cypress.env('url_api'), Cypress.env('email'), Cypress.env('password'))
            .then((resp) => {
                return new Promise(resolve => {
                    expect(resp).property('status').to.equal(200)
                    token = resp.body['authorization'];
                    resolve(token)
                    console.log(token)

                })
            })


    })
    afterEach(() => {

    })

    it('sucess', () => {

        cy.create_products_api(Cypress.env('url_api'), token, nome, preco, descricao, quantidade).then((resp) => {

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
