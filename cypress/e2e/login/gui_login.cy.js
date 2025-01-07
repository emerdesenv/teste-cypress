describe('Testes de Login!', { tags: ['login'] }, () => {
    it.only('Deve realizar o login com sucesso.', () => {
       cy.visit(Cypress.env('urlSite'));

       cy.get('[data-test="username"]').type('standard_user');
       cy.get('[data-test="password"]').type('secret_sauce');
       cy.get('[data-test="login-button"]').click();
    });
});