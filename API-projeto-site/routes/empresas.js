// var express = require('express');
// var router = express.Router();
// var sequelize = require('../models').sequelize;
// var Empresa = require('../models').Empresa;

// let sessoes = [];

// /* Cadastrar usuário */
// router.post('/cadastrar', function(req, res, next) {
// 	console.log('Criando um usuário');
	
// 	Empresa.create(
// 		nome : req.body.nome,
// 		login : req.body.login,
// 		senha: req.body.senha
// 	}).then(resultado => {
// 		console.log(`Registro criado: ${resultado}`)
//         res.send(resultado);
//     }).catch(erro => {
// 		console.error(erro);
// 		res.status(500).send(erro.message);
//   	});
// });

// module.exports = router;
