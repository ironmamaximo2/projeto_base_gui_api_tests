
// <reference types="Cypress" />


describe('delete project', () => {


    const faker = require('faker-br');
    let nome = faker.name.firstName();
   
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
        cy.excluir_projeto(nome)

        cy.val_exclusao_projeto()
       

    })


})