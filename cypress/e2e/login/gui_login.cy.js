import Login from '../pages/login'

describe('Testes de Login!', () => {
    beforeEach(() => {
        Login.visitarPagina();
    });

    it('Deve realizar o login com sucesso.', () => {
        Login.login("standard_user", "secret_sauce");
    });
});