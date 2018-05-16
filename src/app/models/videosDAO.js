function videosDAO() {

}

function insert(dados, req, res, callback) {
	objectId = require('mongodb').ObjectId;
    global.conn.collection('users').update(
    	{_id: objectId(req.params.idUser)},
    	{ $push: {
    				videos : {
    					id_video : new objectId(),
    					titulo: dados.titulo,
    					urlVideo: dados.urlVideo
    				}

    			}
    	},
    	{}
    	,callback);
}

//Retorna Informacoes de todos os Videos
function returnVideos(idUser, req, res, callback) {
	objectId = require('mongodb').ObjectId;
    global.conn.collection('users').find(objectId(req.params.idUser)).toArray()
    
}


videosDAO.prototype.insertVideo =  function (dados, req, res) {
	insert(dados, req, res, function (err, records) {
		if (err) {
            //Status: Internal Server Error
            res.status(500).json({ error: err });
        } else {
            //Status: Success
            res.status(200).json({ 'status': 'successful insertion', 'records': records });
        }
	});
}

module.exports = function () {
    return videosDAO;
}