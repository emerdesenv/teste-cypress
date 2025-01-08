import Login from '../pages/login'

describe('Testes de Login!', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('urlSite'));
    });

    it.only('Deve realizar o login com sucesso.', () => {
       //cy.visit(Cypress.env('urlSite'));
       Login.login("standard_user", "secret_sauce");
    });
});