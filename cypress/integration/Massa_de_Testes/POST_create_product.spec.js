/// <reference types="Cypress" />
for (let i = 0; i < 10; i++) {
    describe('generate data-create products ' + i, () => {

        let token;
        let id;
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
        let quantidade = quant.toString();
        let email = faker.internet.email();
        let administrador = "true";
        let password = "123456";

        before(() => {

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
                    })

                })
        })
        beforeEach(() => {

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
            cy.screenshot({ capture: 'fullPage'})
        })

        it('sucess', () => {

            cy.create_products_api(Cypress.env('url_api'), token, nome+'-'+preco, preco, descricao, quantidade)
                .then((resp) => {
                    return new Promise(resolve => {
                        expect(resp).property('status').to.equal(201)
                        id = resp.body['_id'];
                        resolve(id)
                        console.log(id)
                        cy.writeFile('cypress/fixtures/data/Massa-Ids-Produtos.txt', id + ', ', { flag: 'a+' })
                    })
                })

        })


    })

}