describe('Testes de API - JSONPlaceholder', () => {
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    it('GET - Buscar informações', () => {
    cy.api({
            method: 'GET',
            url: `${baseUrl}/posts/1`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Verifica se a resposta contém algumas propriedades básicas
            expect(response.body).to.have.property('id', 1);
            expect(response.body).to.have.property('title');
            expect(response.body).to.have.property('body');
        });
    });

    it('POST - Criar um novo dado', () => {
        cy.api({
            method: 'POST',
            url: `${baseUrl}/posts`,
            body: {
                title: 'foo',
                body: 'bar',
                userId: 1
            },
        }).then((response) => {
            expect(response.status).to.eq(201);
            // JSONPlaceholder retorna o objeto criado com um "id" gerado
            expect(response.body).to.include({
                title: 'foo',
                body: 'bar',
                userId: 1
            });
            expect(response.body).to.have.property('id'); // JSONPlaceholder simula a criação
        });
    });

    it('PUT - Atualizar um dado existente', () => {
        cy.api({
            method: 'PUT',
            url: `${baseUrl}/posts/1`,
            body: {
                id: 1,
                title: 'foo updated',
                body: 'bar updated',
                userId: 1
            },
        }).then((response) => {
            expect(response.status).to.eq(200);
            // Verifica se as propriedades foram atualizadas no objeto
            expect(response.body).to.include({
                id: 1,
                title: 'foo updated',
                body: 'bar updated',
                userId: 1
            });
        });
    });

    it('DELETE - Remover um dado', () => {
        cy.api({
            method: 'DELETE',
            url: `${baseUrl}/posts/1`
        }).then((response) => {
            // JSONPlaceholder normalmente retorna 200 para um DELETE
            expect(response.status).to.eq(200);
            // O body geralmente está vazio, mas podemos checar caso queira
            expect(response.body).to.be.empty;
        });
    });
});