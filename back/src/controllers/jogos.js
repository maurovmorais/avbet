'use strict';
const knex = require('../database/connection');
const tabela = 'jogos';

module.exports = {

  //busca todos os jogos
  async index(req, res) {
    try {
      const jogos = await knex(tabela).select();

      return res.json({ status: 'sucesso', jogos });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca um jogo unico
  async show(req, res) {
    let { id } = req.params;
    try {
      const jogos = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', jogos });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria um novo jogo
  async create(req, res) {

    let { dataJogo, vencIntervalo, vencJogo, placarA, placarB } = req.body;

    try {
      await knex(tabela).insert({
        dataJogo,
        vencIntervalo,
        vencJogo,
        placarA,
        placarB
      })

      return res.json({status: 'sucesso', message: 'Jogo criado com sucesso'})
    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes do jogo
  async update(req, res) {
    let { id } = req.params;
    let { dataJogo, vencIntervalo, vencJogo, placarA, placarB } = req.body;
    try {

      const jogos = await knex(tabela).select('nome').where('id', id).first();

      if(!jogos){
        return res.json({status: 'erro', message: 'Jogo não existe.'})
      }

      await knex(tabela).update({
        dataJogo,
        vencIntervalo,
        vencJogo,
        placarA,
        placarB,
        atualizado: new Date.now()
      }).where('id', id);

      return res.json({status: 'sucesso', message: 'Jogo atualizado com sucesso.'})

    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //deleta o jogo
  async delete(req, res) {
    let { id } = req.params;
    try {
      const jogos = await knex(tabela).select('dataJogo').where('id', id).first();

      if(!jogos){
        return res.json({status: 'erro', message: 'Jogo não existe.'})
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}