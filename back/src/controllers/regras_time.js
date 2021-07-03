'use strict';
const knex = require('../database/connection');
const tabela = 'regras_time';

module.exports = {

  //busca todas as regras do time
  async index(req, res) {
    try {
      const regras_time = await knex(tabela).select();

      return res.json({ status: 'sucesso', regras_time });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca uma regra do time unica
  async show(req, res) {
    let { id } = req.params;
    try {
      const regras_time = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', regras_time });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria uma nova regra do time
  async create(req, res) {

    let { golSofrido, empate, vitoria, derrota } = req.body;

    try {
      await knex(tabela).insert({
        golSofrido,
        empate,
        vitoria,
        derrota
      })

      return res.json({status: 'sucesso', message: 'Regra do time  criada com sucesso'})
    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes da regra do time
  async update(req, res) {
    let { id } = req.params;
    let { golSofrido, empate, vitoria, derrota } = req.body;
    try {

      const regras_time = await knex(tabela).select('nome').where('id', id).first();

      if(!regras_time){
        return res.json({status: 'erro', message: 'Regra do time não existe.'})
      }

      await knex(tabela).update({
        golSofrido,
        empate,
        vitoria,
        derrota,
        atualizado: knex.fn.now()
      }).where('id', id);

      return res.json({status: 'sucesso', message: 'Regras do time atualizadas com sucesso.'})

    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //deleta Regras do time
  async delete(req, res) {
    let { id } = req.params;
    try {
      const regras_time = await knex(tabela).select('id').where('id', id).first();

      if(!regras_time){
        return res.json({status: 'erro', message: 'Regras do time não existe.'})
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}