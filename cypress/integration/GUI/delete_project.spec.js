describe('delete project', () => {


    const faker = require('faker-br');
    let nome = faker.name.firstName();
    let num =
    faker.random.number({
        'min': 1,
        'max': 9000
    });

    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear();
               // win.onerror = null;
            }
        })
        cy.criar_projeto(nome+num);
        cy.val_men_suc_criacao_projeto();
    })

    afterEach(() => {
        cy.screenshot();
    })

    it('sucess', () => {
        cy.excluir_projeto(nome+num);

        cy.val_exclusao_projeto();


    })


})