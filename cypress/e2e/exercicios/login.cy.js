describe('Teste de Login no OrangeHRM', () => {
    // Antes de cada teste, acessa a página de login do SauceDemo
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    });

    it('Valida a presença dos elementos de login', () => {
        // Verifica se o campo de usuário está presente e visível
        cy.get('[name="username"]').should('be.visible');

        // Verifica se o campo de senha está presente e visível
        cy.get('[name="password"]').should('be.visible');

        // Verifica se o botão de login está presente e visível
        cy.get('.oxd-button').should('be.visible');
    });

    it('Testa o funcionamento dos campos de entrada', () => {
        // Digita algo no campo de usuário
        cy.get('[name="username"]')
        .type('Admin')
        .should('have.value', 'Admin'); // Confere se o valor digitado está correto

        // Digita algo no campo de senha
        cy.get('[name="password"]')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce'); // Confere se o valor digitado está correto
    });

    it('Testa o comportamento do botão de login (clicável)', () => {
        // Verifica se o botão pode ser clicado sem lançar erro
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');

        cy.get('.oxd-button')
        .should('not.be.disabled') // Verifica se o botão não está desabilitado
        .click();

        // Se as credenciais forem válidas, esperamos que a página de inventário seja carregada
        cy.url().should('include', '/dashboard');
    });

    it('Verifica mensagem de erro ao inserir dados incorretos', () => {
        // Digita usuário e senha inválidos
        cy.get('[name="username"]').type('usuario_incorreto');
        cy.get('[name="password"]').type('senha_incorreta');

        // Clica no botão de login
        cy.get('.oxd-button').click();

        // Verifica se a mensagem de erro aparece
        cy.get('.oxd-alert')
        .should('be.visible')
        .and('contain', 'Invalid credentials');
    });
});