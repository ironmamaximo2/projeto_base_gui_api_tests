Cypress.Commands.add('create_users_api', (url_pro_api, name, email, senha, cpf, document) => {

    cy.request({
        method: 'POST',
        url: url_pro_api + '/ums/api/v1/users', // baseUrl is prepended to url
        headers: {
            //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNpby5hZ3VpYXJAZGFzYS5jb20uYnIiLCJwZXJmaWwiOlsiUk9MRV9BRE1JTiJdLCJzdWZpeCI6Img5aiIsImlhdCI6MTU3NDE2NzU2NywiZXhwIjoxNjA1NzAzNTY3fQ.dV6DZU-5iqnzBU0pX_s7Mba3ldKtNAK55FmwGElX0UI',
            //  'content-type': 'application/json'
        },
        body:
        {
            "name": name,
            "email": email,
            "password": senha, 
            "federalTaxId": cpf,
            "roles": ["DIGITAL_PS", "MY_PRACTITIONER"],
            "phoneNumber": "19982490715",
            "dateOfBirth": "1988-10-15",
            "userType": "DOCTOR",
            "termsAccepted": true,
            "personalInfo": {
                "documentOrg": "222222",
                "document": document,
                "documentState": "SP",
                "specialty": "222222"
            }
        },
        resp: []
    })
})


Cypress.Commands.add('create_users_op_api', (url_pro_api, name, email, senha, cpf) => {
cy.request({
    method: 'POST',
    url: url_pro_api + '/ums/api/v1/users', // baseUrl is prepended to url
    headers: {
        //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNpby5hZ3VpYXJAZGFzYS5jb20uYnIiLCJwZXJmaWwiOlsiUk9MRV9BRE1JTiJdLCJzdWZpeCI6Img5aiIsImlhdCI6MTU3NDE2NzU2NywiZXhwIjoxNjA1NzAzNTY3fQ.dV6DZU-5iqnzBU0pX_s7Mba3ldKtNAK55FmwGElX0UI',
        //  'content-type': 'application/json'
    },
    body:
    {
        "name": name,
        "email": email,
        "password": senha, 
        "federalTaxId": cpf,
        "phoneNumber": "19982490715",
        "dateOfBirth": "1988-10-15",
        "userType": "OPERATOR",
        "roles": ["DIGITAL_PS", "MY_PRACTITIONER"],
        "termsAccepted": true,
        "personalInfo": {
            "documentOrg": "",
            "document": "",
            "documentState": "",
            "specialty": "OP"
        }
    },
    resp: []
})
})

Cypress.Commands.add('create_users_termo_api', (url_pro_api, cpf, senha) => {

    cy.request({
        method: 'PUT',
        url: url_pro_api + '/ums/api/v1/terms-and-policies', // baseUrl is prepended to url
        headers: {
            //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNpby5hZ3VpYXJAZGFzYS5jb20uYnIiLCJwZXJmaWwiOlsiUk9MRV9BRE1JTiJdLCJzdWZpeCI6Img5aiIsImlhdCI6MTU3NDE2NzU2NywiZXhwIjoxNjA1NzAzNTY3fQ.dV6DZU-5iqnzBU0pX_s7Mba3ldKtNAK55FmwGElX0UI',
            //  'content-type': 'application/json'
        },
        body:
        {
            
           
            "federalTaxId": cpf,
            "password": senha
            
            }
    })
})

Cypress.Commands.add('create_users_api_saude', (url_saude_api, senha, cpf) => {
    cy.request({
        method: 'POST',
        url: url_saude_api + '/api/user/api/v1/user', // baseUrl is prepended to url
        headers: {
            //  'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hcmNpby5hZ3VpYXJAZGFzYS5jb20uYnIiLCJwZXJmaWwiOlsiUk9MRV9BRE1JTiJdLCJzdWZpeCI6Img5aiIsImlhdCI6MTU3NDE2NzU2NywiZXhwIjoxNjA1NzAzNTY3fQ.dV6DZU-5iqnzBU0pX_s7Mba3ldKtNAK55FmwGElX0UI',
            //  'content-type': 'application/json'
        },
        body:
        {
            "password":senha,
            "acceptedTermsOfUse":true,
            "phone":"19992029715",
            "federalTaxId":cpf
        }
    })
    })

