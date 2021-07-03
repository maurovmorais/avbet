'use strict';
const express = require('express');
const controller = require('../controllers/jogos');
const routes = express.Router();


routes.get('/', controller.index);//busca todos os jogos

routes.get('/:id', controller.show);//busca jogos unico

routes.post('/', controller.create);//cria novo jogo

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta jogo

module.exports = routes;
