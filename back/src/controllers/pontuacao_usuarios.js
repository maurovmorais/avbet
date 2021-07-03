'use strict';
const knex = require('../database/connection');
const tabela = 'pontuacao_usuarios';

module.exports = {

  //busca todos os pontos de usuarios
  async index(req, res) {
    try {
      const pontuacao_usuarios = await knex(tabela).select();

      return res.json({ status: 'sucesso', pontuacao_usuarios });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca uma pontuação d eusuario
  async show(req, res) {
    let { id } = req.params;
    try {
      const pontuacao_usuarios = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', pontuacao_usuarios });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria uma nova pontuação
  async create(req, res) {

    let { userID, acumulado, aposta, pontuacao } = req.body;

    try {
      await knex(tabela).insert({
        userID,
        acumulado,
        aposta,
        pontuacao
      })

      return res.json({status: 'sucesso', message: 'Pontuação criada com sucesso'})
    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes da pontuação
  async update(req, res) {
    let { id } = req.params;
    let { nomeUser, email, senha, perfil, status } = req.body;
    try {

      const pontuacao_usuarios = await knex(tabela).select('userID').where('id', id).first();

      if(!pontuacao_usuarios){
        return res.json({status: 'erro', message: 'Pontuação  não existe.'})
      }

      await knex(tabela).update({
        userID,
        acumulado,
        aposta,
        pontuacao,
        atualizado: new Date.now()
      }).where('id', id);

      return res.json({status: 'sucesso', message: 'Pontuação atualizada com sucesso.'})

    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //deleta a pontuação
  async delete(req, res) {
    let { id } = req.params;
    try {
      const pontuacao_usuarios = await knex(tabela).select('userID').where('id', id).first();

      if(!pontuacao_usuarios){
        return res.json({status: 'erro', message: 'Pontuação não existe.'})
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}