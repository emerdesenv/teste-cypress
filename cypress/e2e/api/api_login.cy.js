describe.only('API - Teste funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        //npx serverest@latest
        //Cypress.env('urlLocal')

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        }).then((response)=>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    });

    it('Deve validar senha incorreta', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/login',
            body: {
                "email": "fulano@qa.com",
                "password": "testinho"
            },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(401)
            expect(response.body.message).to.equal('Email e/ou senha inválidos')
        })
    });
    
    it('Pega um usuário existente', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/usuarios/0uxuPY0cbmQhpEz1'
        }).then((response)=>{
            expect(response.status).to.equal(200)
            

            cy.log('Nome: '+response.body.nome);
           
        })
    });
});