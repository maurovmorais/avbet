'use strict';
const express = require('express');
const controller = require('../controllers/regras_jogadores');
const routes = express.Router();


routes.get('/', controller.index);//busca todas as regras de jogadores

routes.get('/:id', controller.show);//busca regra de jogador unica

routes.post('/', controller.create);//cria nova regra jogadores

routes.put('/:id', controller.update);//atualiza informacoes

routes.delete('/:id', controller.delete);//deleta regra de jpgadores

module.exports = routes;
