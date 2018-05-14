//Recebe a Referencia de Uma Conexao com o SGBD
function usersDAO(connection) {
    this._connection = connection();
}

//
usersDAO.prototype.registerUser = function (user, res) {
    this._connection.open(function (err, mongoclient) {
        mongoclient.collection('users', function (err, collection) {
            collection.insert(user, function (err, records) {
                if (err) {
                    //Status: Internal Server Error
                    res.status(500).json({ error: err });
                } else {
                    //Status: Success
                    res.status(500).json({ 'status': 'successful insertion' });
                }

                mongoclient.close();
            });
        });
    });
}


module.exports = function () {
    return usersDAO;
}