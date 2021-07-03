'use strict';
const express = require('express');
const controller = require('../controllers/regras_time');
const routes = express.Router();


routes.get('/', controller.index);//busca todas as regras

routes.get('/:id', controller.show);//busca regra unica

routes.post('/', controller.create);//cria nova regra

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta regra

module.exports = routes;
