describe('POST: carros', () => {

    /*before(() => {
        cy.dropCollection('carros', { database: 'test', failSilently: 'true' }).then(result => {
            cy.log(result);
        });
    })*/

    it('Deve pegar um carro com sucesso', () => {
        const uuid = "67991a412700449849426c57";

        cy.getCarro(uuid)
        .then(response => {
            expect(response.status).to.eql(200);
        });
    })

    it('Não deve encontrar o carro', () => {
        const uuid = "678a94a0f06c3657cc7fc110";

        cy.getCarro(uuid)
        .then(response => {
            expect(response.status).to.eql(404);
        });
    })

    it('Deve acusar erro ao buscar o carro', () => {
        const uuid = "678a94a0f06c3657cc7fc11T";

        cy.getCarro(uuid)
        .then(response => {
            expect(response.status).to.eql(500);
        });
    })
})