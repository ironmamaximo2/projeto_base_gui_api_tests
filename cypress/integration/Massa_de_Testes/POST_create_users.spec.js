
for (let i = 0; i < 10; i++) {
    describe('generate data-create users api '+i, () => {
        const faker = require('faker-br');
        let nome = faker.name.firstName();
        let email = faker.internet.email();
        let opAdmin = ["true", "false"];
        let administrador = opAdmin[Math.floor(Math.random() * opAdmin.length)];
        /* let pass =
             faker.random.number({
                 'min': 1,
                 'max': 9000
             });
         let password = pass.toString() */
        let password = "123456";

        beforeEach(() => {

        })
        afterEach(() => {
            cy.screenshot({ capture: 'fullPage'})
        })

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
            console.log(email)
            //cy.writeFile('cypress/fixtures/data/emails_newUsers.txt', "'"+email+"-"+password+"'"+', ', { flag: 'a+' })
            cy.writeFile('cypress/fixtures/data/Massa-Emails.txt', email + ', ', { flag: 'a+' })

        })

    })
}
