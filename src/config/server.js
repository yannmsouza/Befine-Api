/* Importar Modulos do Projeto */
var express = require('express'),
    consign = require('consign'),
    bodyParser = require('body-parser'),
    expressValidator = require('express-validator'),
    expressSession = require('express-session'),
    multiparty = require('connect-multiparty'),
    fs = require('fs');


global.db = require('./dbConnection');


/* iniciar o objeto do express */
var app = express();

/* setar as variaveis 'view engine' e 'views' do express */
// app.set('view engine', 'ejs');
// app.set('views', './app/views');

/* configurar o middleware express.static */
// app.use(express.static('./app/public'));

/* configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multiparty());

app.use(function(req, res, next){

	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
	res.setHeader("Access-Control-Allow-Headers", "content-type");
	res.setHeader("Access-Control-Allow-Credentials", true);

	next();
});

/* configurar o middleware express-validator */
app.use(expressValidator());

/* configura o middleware express-session */
app.use(expressSession({
    secret: 'hakjehrgkjahjer',
    resave: false,
    saveUninitialized: false
}));







/* efetua o autoload das rotas, dos models e dos controllers para o objeto app */
 consign()
 	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);


/* exportar o objeto app */
module.exports = app;/* importar o módulo do framework express */
