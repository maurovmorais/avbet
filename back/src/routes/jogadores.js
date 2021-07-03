'use strict';
const express = require('express');
const controller = require('../controllers/jogadores');
const routes = express.Router();


routes.get('/', controller.index);//busca todos os jogadores

routes.get('/:id', controller.show);//busca jogador unico

routes.post('/', controller.create);//cria novo jogador

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta jogador

module.exports = routes;
