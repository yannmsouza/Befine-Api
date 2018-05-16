//var crypto = require('crypto');

//Recebe a Referencia de Uma Conexao com o SGBD
function usersDAO() {

}

function findAll(callback) {
    global.conn.collection('users').find({}).toArray(callback);
}


function findUser(req, callback) {
    objectId = require('mongodb').ObjectId;
    global.conn.collection('users').find(objectId(req.params.idUser)).toArray(callback);
}


function insertUser(user, callback) {
    global.conn.collection('users').insert(user, callback);
    console.log(user);
}

//Retorna todos os usuarios
usersDAO.prototype.returnUsers = function (res) {
    findAll(function (err, docs) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ 'users': docs });
        }
    })

}
//Retorna Somente um Usuario pelo ID
usersDAO.prototype.returnUser = function (req, res) {
    findUser(req, function (err, docs) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ 'user': docs });
        }
    })

}

//
usersDAO.prototype.registerUser = function (user, res) {
    insertUser(user, function (err) {
        if (err) {
            //Status: Internal Server Error
            res.status(500).json({ error: err });
        } else {
            //Status: Success
            res.status(200).json({ 'status': 'successful insertion' });
        }

    });

}

module.exports = function () {
    return usersDAO;
}