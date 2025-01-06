describe.only('API - Teste funcional de Login', () => {
    it('Deve inserir um novo cadastro', () => {
        cy.request({
            method: 'PUT',
            url: 'http://localhost:3000/usuarios/0uxuPY0cbmQhpEz1',
            body: {
                "nome": "Fulano da Silva Teste",
                "email": "testinhonovo@qa.com.br",
                "password": "123456",
                "administrador": "true"
              },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    });
});