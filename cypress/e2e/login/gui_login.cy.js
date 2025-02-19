import Login from '../pages/login'

describe('Testes de Login!', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('urlSite'));
    });

    it('Deve realizar o login com sucesso.', () => {
        cy.get('.login_logo')
        .then((element) => {
            expect(element.text()).eq('Swag Labs');
            expect(element).to.be.visible;
            expect(element).not.disabled;
        });

        Login.login("standard_user", "secret_sauce");
    });
});