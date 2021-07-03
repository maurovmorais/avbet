'use strict';
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const porta = 3337 || process.env.PORT;

const app = express();

const index = require('./routes/index');
const usuarios = require('./routes/usuarios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/usuarios', usuarios);

app.listen(porta, ()=>{
  console.log('api rodando na porta ', porta)
})

