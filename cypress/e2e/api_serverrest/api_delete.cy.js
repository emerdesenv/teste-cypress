describe.only('API - Teste para deletar um usuário', () => {
    it('Pega um usuário existente', () => {
        cy.api({
            method: 'DELETE',
            url: Cypress.env('urlApiWeb')+'/usuarios/FkDYc497io5tx2Nh'
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    });
});