'use strict';
const knex = require('../database/connection');
const tabela = 'posicao';

module.exports = {

  //busca todas posicao
  async index(req, res) {
    try {
      const posicao = await knex(tabela).select();

      return res.json({ status: 'sucesso', posicao });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca uma posição unica
  async show(req, res) {
    let { id } = req.params;
    try {
      const posicao = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', posicao });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria uma nova posicao
  async create(req, res) {

    let { nomePosicao } = req.body;

    try {
      await knex(tabela).insert({
        nomePosicao
      })

      return res.json({status: 'sucesso', message: 'Posição criada com sucesso'})
    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes da posição
  async update(req, res) {
    let { id } = req.params;
    let { nomePosicao } = req.body;
    try {

      const posicao = await knex(tabela).select('id').where('id', id).first();

      if(!posicao){
        return res.json({status: 'erro', message: 'Posicao não existe.'})
      }

      await knex(tabela).update({
        nomePosicao,
        atualizado: new Date.now()
      }).where('id', id);

      return res.json({status: 'sucesso', message: 'Posição atualizado com sucesso.'})

    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //deleta a posição
  async delete(req, res) {
    let { id } = req.params;
    try {
      const posicao = await knex(tabela).select('nomePosicao').where('id', id).first();

      if(!posicao){
        return res.json({status: 'erro', message: 'Posição não existe.'})
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}