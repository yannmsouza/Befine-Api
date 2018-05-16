//Referencia da conexao para o SGBD
function routinesDAO(){

}

function insert(dados, req, res, callback){
	objectID = require('mongodb').ObjectID;
	global.conn.colection('users').update(
		{_id: objectID(req.params.idUser)},
		{ $push:{
		 		 rotinas: {
		 		 	id_rotina : new objectID(),
		 		 	titulo : dados.titulo,
		 		 	passos : dados.passos,
		 		 	urlRotina : dados.urlRotina
		 		}
		 	}
		},
		{}
		,callback);
}

function returnRoutines(idUser, req, res, callback){
	objectID = require('mongodb').ObjectID;
	global.conn.collection('users').find(objectId(req.params.idUser)).toArray()
}

routinesDAO.prototype.insertRoutine = function (dados, req, res){
	insert(dados, req, res, function (err, records){
		if(err){
			res.status(500).json({error: err});
		}else{
			res.status(200).json({'status': 'successfull insertion', 'records': records});
		}
	});
}

module.exports = function(){
	return routinesDAO;
}