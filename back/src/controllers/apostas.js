'use strict';
const knex = require('../database/connection');
const tabela = 'apostas';

module.exports = {

  //busca todas as apostas
  async index(req, res) {
    try {
      const apostas = await knex(tabela).select();

      return res.json({ status: 'sucesso', apostas });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca uma aposta unica
  async show(req, res) {
    let { id } = req.params;
    try {
      const apostas = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', apostas });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria uma nova aposta
  async create(req, res) {

    let {
      UserId,
      melhorDef1,
      melhorDef2,
      melhorDef3,
      melhorMC1,
      melhorMC2,
      melhorAtac1,
      melhorAtac2,
      melhorMA,
      golBonito,
      primeiroGol,
      resultado,
      placarAintervalo,
      placarBintervalo,
      placarAfinal,
      placarBfinal,
      melhorGoleiro
    } = req.body;

    try {
      await knex(tabela).insert({
        UserId,
        melhorDef1,
        melhorDef2,
        melhorDef3,
        melhorMC1,
        melhorMC2,
        melhorAtac1,
        melhorAtac2,
        melhorMA,
        golBonito,
        primeiroGol,
        resultado,
        placarAintervalo,
        placarBintervalo,
        placarAfinal,
        placarBfinal,
        melhorGoleiro
      })

      return res.json({ status: 'sucesso', message: 'Aposta criada com sucesso' })
    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes da aposta
  async update(req, res) {
    let { id } = req.params;
    let {
      UserId,
      melhorDef1,
      melhorDef2,
      melhorDef3,
      melhorMC1,
      melhorMC2,
      melhorAtac1,
      melhorAtac2,
      melhorMA,
      golBonito,
      primeiroGol,
      resultado,
      placarAintervalo,
      placarBintervalo,
      placarAfinal,
      placarBfinal,
      melhorGoleiro
    } = req.body;
    try {

      const apostas = await knex(tabela).select('UserId').where('id', id).first();

      if (!apostas) {
        return res.json({ status: 'erro', message: 'Aposta não existe.' })
      }

      await knex(tabela).update({
        UserId,
        melhorDef1,
        melhorDef2,
        melhorDef3,
        melhorMC1,
        melhorMC2,
        melhorAtac1,
        melhorAtac2,
        melhorMA,
        golBonito,
        primeiroGol,
        resultado,
        placarAintervalo,
        placarBintervalo,
        placarAfinal,
        placarBfinal,
        melhorGoleiro,
        atualizado: new Date.now()
      }).where('id', id);

      return res.json({ status: 'sucesso', message: 'Aposta atualizada com sucesso.' })

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //deleta a aposta
  async delete(req, res) {
    let { id } = req.params;
    try {
      const apostas = await knex(tabela).select('UserId').where('id', id).first();

      if (!apostas) {
        return res.json({ status: 'erro', message: 'Aposta não existe.' })
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}