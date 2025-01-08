Cypress.Commands.add("api_create", (randomName, randomEmail)=> {
    cy.request({
        method: 'POST',
        url: Cypress.env('urlApiWeb')+'/usuarios',
        body: {
            "nome": randomName,
            "email": randomEmail,
            "password": "123456",
            "administrador": "true"
          },
        failOnStatusCode: false
    }).then((response)=>{
        return response;
    })
});