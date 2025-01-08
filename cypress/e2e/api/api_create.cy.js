import { faker } from '@faker-js/faker';

describe('API - Teste para criação de usuário', () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();
    it('Deve inserir um novo cadastro', () => {
        cy.log('Nome: '+randomName);
        cy.log('Email: '+randomEmail);

        cy.api_create(randomName, randomEmail).then((responseBody) => {
            expect(responseBody.status).to.equal(201);
        });
    });

    it('Deve acusar erro de Email já cadastrado', () => {
        cy.fixture('apiData.json').then((apiData) => {
            const nome  = apiData.user.emailIncorreto.nome;
            const email = apiData.user.emailIncorreto.email;
            const pass  = apiData.user.emailIncorreto.password;
            const adm   = apiData.user.emailIncorreto.adm;

            cy.request({
                method: 'POST',
                url: Cypress.env('urlApiLocal')+'/usuarios',
                body: {
                    "nome": nome,
                    "email": email,
                    "password": pass,
                    "administrador": adm
                },
                failOnStatusCode: false
            }).then((response)=>{
                expect(response.status).to.equal(400)

                cy.log(response.body);
                expect(response.body.message).to.equal('Este email já está sendo usado')
            })
        });
    });
});