//Recebendo Arquivos via form-data
module.exports.insertVideos = function (application, req, res) {
    var fs = require('fs');
    var date = new Date();
    timeStamp = date.getTime();
    var videosDAO = new application.app.models.videosDAO();

    var urlVideo = timeStamp + '-' + req.files.file.originalFilename;

    var pathOrigem = req.files.file.path;
    var pathDestino = '../../uploads/videos' + urlVideo;


    fs.rename(pathOrigem, pathDestino, function(err){
        if(err){
            res.status(500).json({error: err});
            return;
        }

        var dados = {
            urlVideo: urlVideo,
            titulo: req.body.titulo
        }
        videosDAO.insertVideos(dados, req, res);
    });

}