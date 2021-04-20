Cypress.Commands.add('login_api', (url_api, email, password) => {
    cy.request({
        method: 'POST',
        url: url_api + 'login/',
        body:
        {
            "email": email,
            "password": password,
        },
        resp: []
    })
})

Cypress.Commands.add('create_users_api', (url_api, nome, email, password, administrador) => {
    cy.request({
        method: 'POST',
        url: url_api + 'usuarios',
        body:
        {
            "nome": nome,
            "email": email,
            "password": password,
            "administrador": administrador
          },
        resp: []
    })
})




