import Login from '../pages/login'

const screens = ['desktop', 'iphone-6'];

screens.forEach(element => {
    describe('Testes de Login!', () => {
        beforeEach(() => {
            if(element != 'desktop') {
                cy.viewport(element);
            }

            //Reaproveitamento de código aqui
            cy.visit('google.com.br');
        });
    
        it('Deve realizar o login com sucesso.', () => {
            /*cy.get('.login_logo').should('be.visible');
            cy.get('.login_logo').should('contain', 'Swag Labs');*/
    
            cy.get('.login_logo')
            .then((element) => {
                expect(element.text()).eq('Swag Labs');
                expect(element).to.be.visible;
                expect(element).not.disabled;
            });
    
            Login.login("standard_user", "secret_sauce");
        });
    });
});