describe('POST: carros', () => {
    before(() => {
        cy.dropCollection('carros', { database: 'test', failSilently: 'true' }).then(result => {
            cy.log(result);
        });
    })

    it('Deve cadastrar um carro', () => {
        const carro = {
            "marca": "Chevrolet",
            "modelo": "Celta",
            "ano": 2012
        };

        cy.postCarro(carro)
        .then(response => {
            expect(response.status).to.eql(201);

            expect(response.body.marca).to.eql(carro.marca);
            expect(response.body.modelo).to.eql(carro.modelo);
            expect(response.body.ano).to.eql(carro.ano);
            expect(response.body._id).to.not.be.empty;
        });
    });

    it('Não deve cadastrar um carro com o mesmo modelo', () => {
        const carro = {
            "marca": "Gol",
            "modelo": "Gol Novo",
            "ano": 2025
        };

        cy.postCarro(carro)
        .then(response => {
            expect(response.status).to.eql(201)
        });

        cy.postCarro(carro)
        .then(response => {
            expect(response.status).to.eql(409)
            expect(response.body.erro).to.eql("O modelo do carro já foi cadastrado.")
        });
    })
})