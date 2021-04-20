Cypress.Commands.add('login_api', (baseUrl3, email, senha, sufixo_hosp) => {
    cy.request({
        method: 'POST',
        url: baseUrl3 + 'public/authenticate/',
        body:
        {
            username: email,
            password: senha,
            sufix: sufixo_hosp
        },
        resp: []
    })
})

Cypress.Commands.add('login_via_api', (baseUrl, federaltax, password) => {
    cy.request({
        method: 'POST',
        url: baseUrl + '/ums/api/v1/login',
        body:
        {
            federalTaxId: federaltax,
            password: password,
        },
        resp: [],
        timeout: 120000,
        failOnStatusCode: false
    })
})

