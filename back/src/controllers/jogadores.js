'use strict';
const knex = require('../database/connection');
const tabela = 'jogadores';

module.exports = {

  //busca todos os jogadores
  async index(req, res) {
    try {
      const jogadores = await knex(tabela).select();

      return res.json({ status: 'sucesso', jogadores });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca um jogador unico
  async show(req, res) {
    let { id } = req.params;
    try {
      const jogador = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', jogador });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria um novo jogador
  async create(req, res) {

    let { nomePlayer, time, posicao, status } = req.body;

    try {
      await knex(tabela).insert({
        nomePlayer,
        time,
        posicao,
        status
      })

      return res.json({status: 'sucesso', message: 'Jogador criado com sucesso'})
    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes do Jogador
  async update(req, res) {
    let { id } = req.params;
    let { nomePlayer, time, posicao, status } = req.body;
    try {

      const jogadores = await knex(tabela).select('nomePlayer').where('id', id).first();

      if(!jogadores){
        return res.json({status: 'erro', message: 'Jogador não existe.'})
      }

      await knex(tabela).update({
        nomePlayer,
        time,
        posicao,
        status,
        atualizado: new Date.now()
      }).where('id', id);

      return res.json({status: 'sucesso', message: 'Jogador atualizado com sucesso.'})

    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //deleta o Jogador
  async delete(req, res) {
    let { id } = req.params;
    try {
      const jogadores = await knex(tabela).select('nomePlayer').where('id', id).first();

      if(!jogadores){
        return res.json({status: 'erro', message: 'Jogador não existe.'})
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}