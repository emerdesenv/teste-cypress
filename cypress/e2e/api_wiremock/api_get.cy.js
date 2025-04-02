describe.only('API - Teste para pegar carros', () => {
    it('Pega todos os carros existentes', () => {
        cy.api({
            method: 'GET',
            url: Cypress.env('urlApiWireMock')+'/api/carros'
        }).then((response)=>{
            expect(response.status).to.equal(200)

            cy.log(response.body);
        })
    });
});