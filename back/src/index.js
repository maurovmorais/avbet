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
const jogadores = require('./routes/jogadores');
const jogos = require('./routes/jogos');
const time = require('./routes/time');
const apostas = require('./routes/apostas');
const regras_time = require('./routes/regras_time');
const regras_jogadores = require('./routes/regras_jogadores');
const pontuacao_usuarios = require('./routes/pontuacao_usuarios');
const posicao = require('./routes/posicao');

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
app.use('/apostas', apostas);
app.use('/regras_time', regras_time);
app.use('/regras_jogadores', regras_jogadores);
app.use('/pontucao_usuarios', pontuacao_usuarios);
app.use('/posicao', posicao);

app.listen(porta, ()=>{
  console.log('api rodando na porta ', porta)
})

