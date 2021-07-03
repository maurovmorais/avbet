'use strict';
const express = require('express');
const controller = require('../controllers/usuarios');
const routes = express.Router();


routes.get('/', controller.index);//busca todos os usuarios

routes.get('/:id', controller.show);//busca usuario unico

routes.post('/', controller.create);//cria novo usuario

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta usuario

module.exports = routes;
