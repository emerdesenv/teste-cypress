describe.only('API - Teste funcional de Login', () => {
    it('Pega um usuário existente', () => {
        cy.request({
            method: 'DELETE',
            url: 'http://localhost:3000/usuarios/FkDYc497io5tx2Nh'
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    });
});