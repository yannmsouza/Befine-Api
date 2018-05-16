//Todos os Usuarios
module.exports.return = function (application, req, res) {
    var usersDAO = new application.app.models.usersDAO();
    usersDAO.returnUsers(res);
}

//Somente um Usuario
module.exports.returnUser = function (application, req, res) {
    var usersDAO = new application.app.models.usersDAO();
    usersDAO.returnUser(req, res);
}


//Registro de Usuario
module.exports.register = function (application, req, res) {

    var user = req.body;

    req.assert('nome', 'Campo não pode ser vazio').notEmpty().len(5, 50);
    req.assert('email', 'Campo não pode ser vazio').notEmpty();
    req.assert('senha', 'Campo não pode ser vazio').notEmpty();
    req.assert('idade', 'Campo não pode ser vazio').notEmpty();

    var erros = req.validationErrors();

    if (erros) {
        res.send('cadastro', { validation: erros, user: user });
        return;
    }

    var usersDAO = new application.app.models.usersDAO();

    usersDAO.registerUser(user, res);

    //geração dos parametros
    //res.send('podemos cadastrar')
}