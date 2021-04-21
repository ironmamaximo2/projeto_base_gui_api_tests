describe('Edit project', () => {

    const faker = require('faker-br');
    var nome = faker.name.firstName();
    let num =
        faker.random.number({
            'min': 1,
            'max': 9000
        });
    var timeout =
        faker.random.number({
            'min': 10,
            'max': 900
        });
    var timeoutInv =
        faker.random.number({
            'min': 901,
            'max': 1010
        });



    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear();
                //win.onerror = null;
            }
        })
        cy.criar_projeto(nome + num);
        cy.val_men_suc_criacao_projeto();


    })

    afterEach(() => {
        cy.screenshot();
    })




    it('sucess', () => {


        cy.editar_projeto(nome + num, timeout);
        cy.val_mens_suc_editar_projeto();


    })



})
describe('Edit project errors', () => {



    const faker = require('faker-br');
    var nome = faker.name.firstName();
    var timeoutInv =
        faker.random.number({
            'min': 901,
            'max': 1010
        });


    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear();
                win.onerror = null;
            }
        })
        cy.criar_projeto(nome);
        cy.val_men_suc_criacao_projeto();

    })

    afterEach(() => {
        cy.screenshot();
    })




    it('invalid timeout', () => {


        cy.editar_projeto_timeout(nome, timeoutInv);
        cy.get('div[role="alert"]').contains('Max value is 900 seconds')
            .should('be.visible');


    })

})