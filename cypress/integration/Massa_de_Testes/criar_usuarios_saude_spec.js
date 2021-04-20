// <reference types="Cypress" />


for (let i = 0; i < 3; i++) {
    describe('Criar usuários', () => {



        let senha = '123456';
        //let name = 'Inmetrics_Pac_Performace_Test'
        var faker = require('faker-br');
        //var fakeEmail = faker.internet.email();
        var fakecpf = faker.br.cpf();

        beforeEach(() => {

        })


        it('Paciente', () => {

            cy.create_users_api_saude(Cypress.env('url_saude_api'), senha, fakecpf)
                .then((resp) => {
                    //return new Promise(resolve => {
                    //expect(resp.body.user.hospitais).to.have.property('id', 1)
                    expect(resp).property('status').to.equal(200)

                    console.log(fakecpf)


                })
        })

        
    })
}