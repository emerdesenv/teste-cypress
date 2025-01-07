describe.only('API - Teste para pegar um usuário', () => {
    it('Pega um usuário existente FDFDF', () => {
        cy.request({
            method: 'GET',
            url: Cypress.env('urlApiWeb')+'/usuarios/0uxuPY0cbmQhpEz1'
        }).then((response)=>{
            expect(response.status).to.equal(200)

            cy.log('Nome: '+response.body.nome);
        })
    });
});