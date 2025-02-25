beforeEach(() => {
    cy.login('Admin', 'admin123');
});

describe('Testes somente de acesso a página!', () => {
    it('Deve verificar somente o título da página.', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
        cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('be.visible').click();
    });
});