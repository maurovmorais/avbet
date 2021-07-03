'use strict';
const knex = require('../database/connection');
const tabela = 'usuarios';

module.exports = {

  //busca todos os usuarios
  async index(req, res) {
    try {
      const usuarios = await knex(tabela).select();

      return res.json({ status: 'sucesso', usuarios });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca um usuario unico
  async show(req, res) {
    let { id } = req.params;
    try {
      const usuario = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', usuario });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria um novo usuario
  async create(req, res) {

    let { nomeUser, email, senha, token, perfil } = req.body;

    try {
      await knex(tabela).insert({
        nomeUser,
        email,
        senha,
        token,
        perfil
      })

      return res.json({status: 'sucesso', message: 'Usuario criado com sucesso'})
    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes do usuario
  async update(req, res) {
    let { id } = req.params;
    let { nomeUser, email, senha, perfil, status } = req.body;
    try {

      const usuario = await knex(tabela).select('nome').where('id', id).first();

      if(!usuario){
        return res.json({status: 'erro', message: 'Usuário não existe.'})
      }

      await knex(tabela).update({
        nomeUser,
        email,
        senha,
        perfil,
        status,
        atualizado: knex.fn.now()
      }).where('id', id);

      return res.json({status: 'sucesso', message: 'Usuario atualizado com sucesso.'})

    } catch (e) {
      return res.json({status: 'erro', message: e.message })
    }
  },


  //deleta o usuario
  async delete(req, res) {
    let { id } = req.params;
    try {
      const usuario = await knex(tabela).select('nome').where('id', id).first();

      if(!usuario){
        return res.json({status: 'erro', message: 'Usuário não existe.'})
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}