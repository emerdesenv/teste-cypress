
import { faker } from '@faker-js/faker';
describe.only('API - Teste funcional de Login', () => {
    const randomName = faker.person.fullName();
    const randomEmail = faker.internet.email();

    it('Deve alterar o cadastro', () => {
        cy.log('Nome: '+randomName);
        cy.log('Email: '+randomEmail);

        cy.request({
            method: 'PUT',
            url: Cypress.env('urlApiWeb')+'/usuarios/0uxuPY0cbmQhpEz1',
            body: {
                "nome": randomName,
                "email": randomEmail,
                "password": "123456",
                "administrador": "true"
              },
            failOnStatusCode: false
        }).then((response)=>{
            expect(response.status).to.equal(200)
        })
    });
});