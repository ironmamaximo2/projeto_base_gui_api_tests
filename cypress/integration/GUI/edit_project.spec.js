// <reference types="Cypress" />

describe('Edit project', () => {



    const faker = require('faker-br');
    var nome = faker.name.firstName();
    var timeout = 
    faker.random.number({
        'min': 10,
        'max': 900
    });


    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
        cy.criar_projeto(nome);
        cy.val_men_suc_criacao_projeto()
    })

    afterEach(() => {
        cy.screenshot()
    })
   
        it('sucess', () => {

           
           cy.editar_projeto(nome, timeout)
           cy.val_mens_suc_editar_projeto()
            

        })

})