'use strict';
const express = require('express');
const controller = require('../controllers/apostas');
const routes = express.Router();


routes.get('/', controller.index);//busca todas as apostas

routes.get('/:id', controller.show);//busca aposta unica

routes.post('/', controller.create);//cria nova aposta

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta aposta

module.exports = routes;
