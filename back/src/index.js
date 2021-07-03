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
const usuarios = require('./routes/jogadores');
const usuarios = require('./routes/jogos');
const usuarios = require('./routes/time');
const usuarios = require('./routes/apostas');
const usuarios = require('./routes/regras_time');
const usuarios = require('./routes/regras_jogadores');
const usuarios = require('./routes/pontuacao_usuarios');
const usuarios = require('./routes/posicao');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.use(morgan('dev'));


app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/usuarios', usuarios);
app.use('/jogadores', jogadores);
app.use('/jogos', jogos);
app.use('/time', time);
app.use('/time', apostas);
app.use('/time', regras_time);
app.use('/time', regras_jogadores);
app.use('/time', pontuacao_usuarios);
app.use('/time', posicao);

app.listen(porta, ()=>{
  console.log('api rodando na porta ', porta)
})

