'use strict';
const knex = require('../database/connection');
const tabela = 'time';

module.exports = {

  //busca todos os times
  async index(req, res) {
    try {
      const time = await knex(tabela).select();

      return res.json({ status: 'sucesso', time });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca um time unico
  async show(req, res) {
    let { id } = req.params;
    try {
      const time = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', time });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria um novo time
  async create(req, res) {

    let {
      nomeTime,
      goleiro1,
      goleiro2,
      defesa1,
      defesa2,
      defesa3,
      defesa4,
      defesa5,
      defesa6,
      meioCampo1,
      meioCampo2,
      meioCampo3,
      meioCampo4,
      atac1,
      atac2,
      atac3,
      atac4,
      atac5,
      pontTime
    } = req.body;

    try {
      await knex(tabela).insert({
        nomeTime,
        goleiro1,
        goleiro2,
        defesa1,
        defesa2,
        defesa3,
        defesa4,
        defesa5,
        defesa6,
        meioCampo1,
        meioCampo2,
        meioCampo3,
        meioCampo4,
        atac1,
        atac2,
        atac3,
        atac4,
        atac5,
        pontTime
      })

      return res.json({ status: 'sucesso', message: 'Time criado com sucesso' })
    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes do time
  async update(req, res) {
    let { id } = req.params;
    let {
      nomeTime,
      goleiro1,
      goleiro2,
      defesa1,
      defesa2,
      defesa3,
      defesa4,
      defesa5,
      defesa6,
      meioCampo1,
      meioCampo2,
      meioCampo3,
      meioCampo4,
      atac1,
      atac2,
      atac3,
      atac4,
      atac5,
      pontTime
    } = req.body;
    try {

      const time = await knex(tabela).select('nomeTime').where('id', id).first();

      if (!time) {
        return res.json({ status: 'erro', message: 'Time não existe.' })
      }

      await knex(tabela).update({
        nomeTime,
        goleiro1,
        goleiro2,
        defesa1,
        defesa2,
        defesa3,
        defesa4,
        defesa5,
        defesa6,
        meioCampo1,
        meioCampo2,
        meioCampo3,
        meioCampo4,
        atac1,
        atac2,
        atac3,
        atac4,
        atac5,
        pontTime,
        atualizado: knex.fn.now()
      }).where('id', id);

      return res.json({ status: 'sucesso', message: 'Time atualizado com sucesso.' })

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //deleta o time
  async delete(req, res) {
    let { id } = req.params;
    try {
      const time = await knex(tabela).select('nomeTime').where('id', id).first();

      if (!time) {
        return res.json({ status: 'erro', message: 'Time não existe.' })
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}