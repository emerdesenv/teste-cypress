import { faker } from '@faker-js/faker';

describe.only('API - Teste funcional de Login', () => {
    it.only('Deve inserir um novo cadastro', () => {
        const randomName = faker.person.fullName();
        const randomEmail = faker.internet.email();

        cy.log('Nome: '+randomName);
        cy.log('Email: '+randomEmail);

        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": "Fulano da Silva",
                "email": "testinhonovo@qa.com.br",
                "password": "123456",
                "administrador": "true"
              },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(201)
        })
    });

    it('Deve acusar erro de Email já cadastrado', () => {
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": "Fulano da Silva",
                "email": "testinhonovo@qa.com.br",
                "password": "123456",
                "administrador": "true"
              },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(400)
            expect(response.body.message).to.equal('Este email já está sendo usado')
        })
    });
});