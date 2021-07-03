'use strict';
const express = require('express');
const controller = require('../controllers/posicao');
const routes = express.Router();


routes.get('/', controller.index);//busca todas as posições

routes.get('/:id', controller.show);//busca posição

routes.post('/', controller.create);//cria nova posição

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta posição

module.exports = routes;
