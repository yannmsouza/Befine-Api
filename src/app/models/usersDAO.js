//Recebe a Referencia de Uma Conexao com o SGBD
function usersDAO() {

}

function findAll(callback) {
    global.conn.collection('users').find({}).toArray(callback);
}

function insertUser(user, callback) {
    global.conn.collection('users').insert(user, callback);
}

usersDAO.prototype.returnUsers = function (res) {
    findAll(function (err, docs) {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(200).json({ 'users': docs });
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