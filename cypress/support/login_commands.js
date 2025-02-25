// Apenas para uso interno caso tenha sistemas de login
Cypress.Commands.add("login", (user, pass)=> {
    cy.session([user, pass], () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');

            cy.get('[name="username"]').type(user);
            cy.get('[name="password"]').type(pass);
        
            cy.get('.orangehrm-login-button').click();
        }, {
            cacheAcrossSpecs: true
        }
    );
});