'use strict';
const express = require('express');
const controller = require('../controllers/pontuacao_usuarios');
const routes = express.Router();


routes.get('/', controller.index);//busca todas pontuações

routes.get('/:id', controller.show);//busca pontuação unica

routes.post('/', controller.create);//cria nova pontução

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta pontuação

module.exports = routes;
