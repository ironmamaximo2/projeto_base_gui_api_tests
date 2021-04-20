// <reference types="Cypress" />


for (let i = 0; i < 3; i++) {
    describe('Criar usuários Médicos', () => {



        let senha = '123456';
        let name = 'Inmetrics_Med_Performace_Test'
        var faker = require('faker-br');
        var fakeEmail = faker.internet.email();
        var fakecpf = faker.br.cpf();

        beforeEach(() => {

        })


        it('Médico', () => {

            cy.create_users_api(Cypress.env('url_pro_api'), name, fakeEmail, senha, fakecpf, fakecpf)
                .then((resp) => {
                    //return new Promise(resolve => {
                    //expect(resp.body.user.hospitais).to.have.property('id', 1)
                    expect(resp).property('status').to.equal(200)

                    console.log("Cpf médico: "+fakecpf)


                })
        })

        it('Aceita termo Médico', () => {


            cy.create_users_termo_api(Cypress.env('url_pro_api'), fakecpf, senha)
                .then((resp) => {
                    //return new Promise(resolve => {
                    //expect(resp.body.user.hospitais).to.have.property('id', 1)
                    expect(resp).property('status').to.equal(200)

                    //console.log(fakecpf)


                })
        })

        it('Aprova usuários médicos', () => {
            

            cy.updateBD_user_permission_approved(fakecpf).then(queryResponse => {
                    

                })
        })
        
    })
    
}

for (let i = 0; i < 3; i++) {
    describe('Criar usuários Op', () => {



        let senha = '123456';
        let name = 'Inmetrics_Op_Performace_Test'
        var faker = require('faker-br');
        var fakeEmail = faker.internet.email();
        var fakecpf = faker.br.cpf();


        it('Operador', () => {


            cy.create_users_op_api(Cypress.env('url_pro_api'), name, fakeEmail, senha, fakecpf)
                .then((resp) => {
                    //return new Promise(resolve => {
                    //expect(resp.body.user.hospitais).to.have.property('id', 1)
                    expect(resp).property('status').to.equal(200)

                    console.log("CPF de operador: "+fakecpf)


                })

        })

        it('Aceita termo usuários', () => {


            cy.create_users_termo_api(Cypress.env('url_pro_api'), fakecpf, senha)
                .then((resp) => {
                    //return new Promise(resolve => {
                    //expect(resp.body.user.hospitais).to.have.property('id', 1)
                    expect(resp).property('status').to.equal(200)

                    //console.log(fakecpf)


                })
        })
        

        it('Aprova usuários operadores', () => {
            

            cy.updateBD_user_permission_approved(fakecpf).then(queryResponse => {
                    

                })
        })

    })
}




