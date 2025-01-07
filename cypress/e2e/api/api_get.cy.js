describe.only('API - Teste para pegar um usuário', () => {
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