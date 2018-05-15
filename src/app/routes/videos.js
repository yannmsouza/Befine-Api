module.exports = function (application) {
    // Rota de Envio de Videos do Usuario
    application.post('/user/:idUser/videos', function (req, res) {
        console.log('chegou aqui post');
        application.app.controllers.videos.insertVideos(application, req, res);
    });

    // Rota para Retorno da Lista de Videos do Usuario
    application.get('/user/:idUser/videos', function (req, res) {

    });

    // Rota para Retorno de um Video pelo ID Atraves de Stream
    application.get('/user/:idUser/videos/:idVideo', function (req, res) {

    });

    // Rota para Atualizar Dados de um Video pelo ID
    application.put('/user/:idUser/videos/:idVideo', function (req, res) {

    });

    // Rota para Procura de Video por Chave
    // Rota para Deletar Video por ID

}