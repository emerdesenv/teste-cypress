// Apenas para uso com a API ServerRest
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

// Apenas para uso com o MongoDB Clound
Cypress.Commands.add('postLivro', (livro) => {
    cy.api({
        url: Cypress.env('urlApiMongoDB')+'/api/livros',
        method: 'POST',
        body: livro,
        failOnStatusCode: false
    }).then(response => {
        return response
    })
});