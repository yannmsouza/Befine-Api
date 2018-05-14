
module.exports.register = function(application, req, res){

	var userData = req.body;

	req.assert('nome', 'Campo não pode ser vazio').notEmpty();
	req.assert('usuario', 'Campo não pode ser vazio').notEmpty();
	req.assert('senha', 'Campo não pode ser vazio').notEmpty();
	req.assert('idade', 'Campo não pode ser vazio').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		res.send('cadastro', {validation: erros, userData: userData});
		return;
	}

	var connection = application.config.dbConnection;
	var usersDAO = new application.app.models.usersDAO(connection);

    usersDAO.registerUser(userData, res);
    
	//geração dos parametros
	res.send('podemos cadastrar')
}