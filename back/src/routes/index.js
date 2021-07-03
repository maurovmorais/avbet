'use strict';
const express = require('express');
const controller = require('../controllers/index');
const routes = express.Router();

routes.get('/', controller.index);
routes.post('/', controller.create);
routes.put('/:id', controller.update);
routes.delete('/:id', controller.delete)

module.exports = routes;
