
Cypress.Commands.add('consBD_example', { timeout: 7000 }, (uf) => {
    cy.task("dbQuery", { "query": "SELECT count(*) AS \"count\" FROM ( SELECT \"Doctor\".\"id\", \"Doctor\".\"document_org\" AS \"documentOrg\", \"Doctor\".\"document\", \"Doctor\".\"document_state\" AS \"documentState\", \"Doctor\".\"specialty\", \"Doctor\".\"user_id\", \"User\".\"id\" AS \"User.id\", \"User\".\"name\" AS \"User.name\", \"User\".\"email\" AS \"User.email\", \"User\".\"federal_tax_id\" AS \"User.federalTaxId\", \"User\".\"phone_number\" AS \"User.phoneNumber\", \"User\".\"first_access\" AS \"User.firstAccess\", \"User\".\"date_of_birth\" AS \"User.dateOfBirth\", \"User\".\"user_type\" AS \"User.userType\" FROM \"doctor\" AS \"Doctor\" INNER JOIN \"user\" AS \"User\" ON \"Doctor\".\"user_id\" = \"User\".\"id\" WHERE \"Doctor\".\"document_state\" = '" + uf + "' ORDER BY \"User\".\"name\" ASC LIMIT 100 OFFSET 0) AS \"sub\"" })
})



