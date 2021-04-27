describe('GUI-Edit project', () => {

    const faker = require('faker-br');
    let nome = faker.name.firstName();
    
    let num =
        faker.random.number({
            'min': 1,
            'max': 9000
        });
    
    let timeout =
        faker.random.number({
            'min': 10,
            'max': 900
        });
    let timeoutInv =
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
        cy.criar_projeto(nome+'-'+num);
        cy.val_men_suc_criacao_projeto();


    })

    afterEach(() => {
        cy.screenshot();
    })




    it('sucess', () => {


        cy.editar_projeto(nome+'-'+num, timeout);
        cy.val_mens_suc_editar_projeto();


    })



})
describe('GUI-Edit project errors', () => {



    const faker = require('faker-br');
    var nome = faker.name.firstName();
    let num =
        faker.random.number({
            'min': 1,
            'max': 9000
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
                win.onerror = null;
            }
        })
        cy.criar_projeto(nome+'-'+num);
        cy.val_men_suc_criacao_projeto();

    })

    afterEach(() => {
        cy.screenshot();
    })




    it('invalid timeout', () => {


        cy.editar_projeto_timeout(nome+'-'+num, timeoutInv);
        cy.val_mensagem_timeout_inval();



    })

})