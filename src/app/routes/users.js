module.exports = function (application) {
    // Rota de Cadastro de Usuario
    application.post('/user', function (req, res) {
        //console.log('chegou aqui post');
        application.app.controllers.users.register(application, req, res);
    });

    // Rota para Recuperar Dados de Todos os Usuarios
    application.get('/users', function (req, res) {
        //console.log('chegou aqui get');
        application.app.controllers.users.return(application, req, res);
        
    });

    // Rota para Recuperar Dados do Usuario pelo ID
    application.get('/user/:idUser', function (req, res) {
        //console.log('chegou aqui get');
        application.app.controllers.users.return(application, req, res);
        
    });

    // Rota para Atualizar Dados do Usuario pelo ID
    application.put('/user/:idUser', function (req, res) {

    });

    // --> Rota de Login do usuario
    //Sessao e Autenticacao
    //
    // Rota para Atualizar Senha do Usuario pelo ID
    // Rota para Deletar Usuario

}