import { faker } from '@faker-js/faker';

describe('API - Teste para criação de usuário', () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    it('Deve inserir um novo cadastro', () => {
        cy.log('Nome: '+randomName);
        cy.log('Email: '+randomEmail);

        //Teste
        
        cy.request({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            body: {
                "nome": randomName,
                "email": randomEmail,
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