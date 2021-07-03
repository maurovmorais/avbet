'use strict';
const express = require('express');
const controller = require('../controllers/time');
const routes = express.Router();


routes.get('/', controller.index);//busca todos os times

routes.get('/:id', controller.show);//busca time unico

routes.post('/', controller.create);//cria novo time

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta time

module.exports = routes;
