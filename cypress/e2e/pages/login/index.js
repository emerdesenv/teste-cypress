class Login {
    
    visitarPagina() { cy.visit(Cypress.env('urlSite')); }

    getUserField() { return cy.get('[data-test="username"]'); }
    getPasswordField() { return cy.get('[data-test="password"]'); }
    getLoginButton() { return cy.get('[data-test="login-button"]'); }

    fillUser(user) { this.getUserField().type(user); }
    fillPassword(password) { this.getPasswordField().type(password); }

    clickLogin() { this.getLoginButton().click(); }
    
    // Função que combina as ações para realizar o login
    login(username, password) {
        this.fillUser(username);
        cy.log("Nome: "+username);
        this.fillPassword(password);
        cy.log("Senha: "+password);

        this.clickLogin();
    }
}

export default new Login()