Cypress.Commands.add('login_api', (url_api, email, password) => {
    cy.request({
        method: 'POST',
        url: url_api + 'login/',
        failOnStatusCode: false,
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
        failOnStatusCode: false,
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

Cypress.Commands.add('create_products_api', (url_api, token, nome, preco, descricao, quantidade) => {
    cy.request({
        method: 'POST',
        url: url_api + 'produtos',
        failOnStatusCode: false,
        headers: {
            'Authorization': token,
            'content-type': 'application/json'
        },
        body:
        {
            "nome": nome,
            "preco": preco,
            "descricao": descricao,
            "quantidade": quantidade
          },
        resp: []
    })
})

Cypress.Commands.add('edit_users_api', (url_api, id, nome, email, password, administrador) => {
    cy.request({
        method: 'PUT',
        url: url_api + 'usuarios/'+id,
        failOnStatusCode: false,
        
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

Cypress.Commands.add('list_products_api', (url_api, token) => {
    cy.request({
        method: 'GET',
        url: url_api + 'produtos',
        failOnStatusCode: false,
        headers: {
            'Authorization': token,
            'content-type': 'application/json'
        },
        body:
        {
            
          },
        resp: []
    })
})


Cypress.Commands.add('delete_users_api', (url_api, id, nome, email, password, administrador) => {
    cy.request({
        method: 'DELETE',
        url: url_api + 'usuarios/'+id,
        failOnStatusCode: false,
        
        body:
        {
            
          },

        resp: []
    })
})


