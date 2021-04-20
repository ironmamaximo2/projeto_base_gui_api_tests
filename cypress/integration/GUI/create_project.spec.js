import PRESETS from '../../massa_dados/sets'

describe('Create project', () => {


    const viewPortDic = PRESETS.viewPortDic;
    let faker = require('faker-br');
    let nome = faker.name.firstName();
    let num =
        faker.random.number({
            'min': 1,
            'max': 9000
        });



    beforeEach(() => {
        cy.visit(Cypress.env('url'), {
            onBeforeLoad: (win) => {
                win.sessionStorage.clear()
                win.onerror = null
            }
        })
        
    })

    afterEach(() => {
        cy.screenshot()
    })
    for (let i = 0; i < (Object.keys(viewPortDic).length); i++) {

        it('sucess - ' + viewPortDic[i][0], () => {

            cy.criar_projeto_viewPort(nome, viewPortDic, i, num);

            cy.val_men_suc_criacao_projeto();

        })
    }

})