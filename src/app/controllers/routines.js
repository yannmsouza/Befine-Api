module.exports.insertRoutine = function(application, req, res){
	var fs = require('fs');
	var date = new Date();
	timeStamp = date.getTime();
	var routinesDAO = new application.app.models.routinesDAO();

	var urlRoutine = timeStamp + '-' + req.files.file.originalFilename;

	var pathOrigem = req.files.file.path;
	var pathDestino = '../../upload/routines' + urlRoutine;

	fs.rename(pathOrigem, pathDestino, function(err){
		if(err){
            res.status(500).json({error: err});
            return;
        }

        var dados = {
            urlRoutine: urlRoutine,
            titulo: req.body.titulo,
            passos: req.body.passos
        }
        routinesDAO.insertRoutine(dados, req, res);
	});
}