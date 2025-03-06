import Login from '../pages/login'
describe('Testes de Login!', () => {
    beforeEach(() => {
        //Login.visitarPagina();
        cy.login('standard_user', 'secret_sauce');
    });

    it('Deve realizar o login com sucesso.', () => {
        //Login.login("standard_user", "secret_sauce");
        cy.login('standard_user', 'secret_sauce');
    });
});