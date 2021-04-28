
const sorryElements = require('../page_elements/sorry_page_elements')
const sorryElementsN = new sorryElements()


Cypress.Commands.add('criar_projeto_viewPort', { timeout: 7000 }, (nome, viewPortDic, i, num) => {
  cy.viewport(viewPortDic[i][1], viewPortDic[i][2])
  cy.get(sorryElementsN.btNewProject).should('be.visible').click()
  cy.get(sorryElementsN.cpProjectId).should('be.visible').type(nome + "-" + viewPortDic[i][0] + "-" + num)
  cy.get(sorryElementsN.btCreateProjectSave).should('be.visible').click()

})

Cypress.Commands.add('criar_projeto', { timeout: 7000 }, (nome) => {
  //cy.viewport(viewPortDic[i][1], viewPortDic[i][2])
  cy.get(sorryElementsN.btNewProject).should('be.visible').click()
  cy.get(sorryElementsN.cpProjectId).should('be.visible').type(nome)
  cy.get(sorryElementsN.btCreateProjectSave).should('be.visible').click()

})

Cypress.Commands.add('val_men_suc_criacao_projeto', { timeout: 7000 }, () => {
  cy.get('form div path').should('be.visible')
  cy.get(sorryElementsN.mensAlert)
    .contains('Project Created!')
    .should('be.visible')
    .then($button => {
      $button.css('border', '1px solid magenta')
    })
})

Cypress.Commands.add('val_men_erro_criacao_projeto', { timeout: 7000 }, () => {
  cy.get('form div path').should('be.visible')
  cy.get(sorryElementsN.mensAlert)
    .contains('Error: Duplicate projectId')
    .should('be.visible')
    .then($button => {
      $button.css('border', '1px solid magenta')
    })
})



Cypress.Commands.add('editar_projeto', { timeout: 7000 }, (nome, timeout) => {
  cy.get(sorryElementsN.lkAllProjects).contains('All Projects').should('be.visible').click()
  cy.get(sorryElementsN.cpEnterProjectId).should('be.visible').type(nome)
  cy.get(sorryElementsN.icDelete).eq(0).should('be.visible')
  cy.get('a[href="/' + nome + '/edit"]').should('be.visible').click({ force: true })
  cy.get(sorryElementsN.cpInactivityTimeout).should('be.visible').clear().type(timeout);
  cy.get(sorryElementsN.btCreateProjectSave).should('be.visible').click()

})

Cypress.Commands.add('val_mens_suc_editar_projeto', { timeout: 7000 }, (nome, timeout) => {
  cy.get(sorryElementsN.mensAlert)
    .contains('Project Saved!')
    .should('be.visible')
    .then($button => {
      $button.css('border', '1px solid magenta')
    })

})

Cypress.Commands.add('excluir_projeto', { timeout: 7000 }, (nome) => {
  cy.get(sorryElementsN.lkAllProjects).contains('All Projects').should('be.visible').click()
  cy.get(sorryElementsN.opAutoRefresh).should('be.visible').click()
  cy.get(sorryElementsN.cpEnterProjectId).should('be.visible').type(nome)
  cy.get('a[href="/' + nome + '/runs"]').contains(nome).should('be.visible')
  if (Cypress.browser.name === 'chrome') {
    cy.get('.css-qmxd6z').should('be.visible')
  }
  else {
  }
  cy.get(sorryElementsN.icDelete).eq(0).should('be.visible').click({ force: true })
  cy.get(sorryElementsN.btDelModal).eq(1).should('be.visible').click({ force: true })
})

Cypress.Commands.add('val_exclusao_projeto', { timeout: 7000 }, () => {
  cy.get('div p').should('have.text', 'No projects found ')
    .then($button => {
      $button.css('border', '1px solid magenta')
    })



})

Cypress.Commands.add('editar_projeto_timeout', { timeout: 7000 }, (nome, timeout) => {
  cy.get(sorryElementsN.lkAllProjects).contains('All Projects').should('be.visible').click()
  cy.get(sorryElementsN.cpEnterProjectId).should('be.visible').type(nome)
  cy.get(sorryElementsN.icDelete).eq(0).should('be.visible')
  cy.get('a[href="/' + nome + '/edit"]').should('be.visible').click({ force: true })
  cy.get(sorryElementsN.cpInactivityTimeout).should('be.visible').clear().type(timeout);
  //cy.get(sorryElementsN.btCreateProjectSave).should('be.visible').click()

})

Cypress.Commands.add('val_mensagem_timeout_inval', { timeout: 7000 }, () => {
  cy.get('div[role="alert"]').contains('Max value is 900 seconds')
    .should('be.visible')
    .then($button => {
      $button.css('border', '1px solid magenta')
    })

})