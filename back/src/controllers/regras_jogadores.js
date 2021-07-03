'use strict';
const knex = require('../database/connection');
const tabela = 'regras_jogadores';

module.exports = {

  //busca todas as regras de jogadores
  async index(req, res) {
    try {
      const regras_jogadores = await knex(tabela).select();

      return res.json({ status: 'sucesso', regras_jogadores });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },

  //busca uma regra de jogador unica
  async show(req, res) {
    let { id } = req.params;
    try {
      const regras_jogadores = await knex(tabela).select().where('id', id);

      return res.json({ status: 'sucesso', regras_jogadores });

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //cria uma nova regra de jogadores
  async create(req, res) {

    let {
      tomarGolGoleiro,
      fazerFalta,
      fazerPenalti,
      naoCompareceu,
      golContra,
      entrarCampo,
      ole,
      trave,
      gol,
      assistencia,
      defPenalti,
      perferPenalti,
      defesa,
      cardAmarelo,
      cardVermelho,
      rapadura
    } = req.body;

    try {
      await knex(tabela).insert({
        tomarGolGoleiro,
        fazerFalta,
        fazerPenalti,
        naoCompareceu,
        golContra,
        entrarCampo,
        ole,
        trave,
        gol,
        assistencia,
        defPenalti,
        perferPenalti,
        defesa,
        cardAmarelo,
        cardVermelho,
        rapadura
      })

      return res.json({ status: 'sucesso', message: 'Regra do jogador criada com sucesso' })
    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //atualiza as informacoes das regras de jogadores
  async update(req, res) {
    let { id } = req.params;
    let {
      tomarGolGoleiro,
      fazerFalta,
      fazerPenalti,
      naoCompareceu,
      golContra,
      entrarCampo,
      ole,
      trave,
      gol,
      assistencia,
      defPenalti,
      perferPenalti,
      defesa,
      cardAmarelo,
      cardVermelho,
      rapadura
    } = req.body;
    try {

      const regras_jogadores = await knex(tabela).select('id').where('id', id).first();

      if (!regras_jogadores) {
        return res.json({ status: 'erro', message: 'Regra não existe.' })
      }

      await knex(tabela).update({
        tomarGolGoleiro,
        fazerFalta,
        fazerPenalti,
        naoCompareceu,
        golContra,
        entrarCampo,
        ole,
        trave,
        gol,
        assistencia,
        defPenalti,
        perferPenalti,
        defesa,
        cardAmarelo,
        cardVermelho,
        rapadura,
        atualizado: knex.fn.now()
      }).where('id', id);

      return res.json({ status: 'sucesso', message: 'Regra atualizada com sucesso.' })

    } catch (e) {
      return res.json({ status: 'erro', message: e.message })
    }
  },


  //deleta o regra do jogador
  async delete(req, res) {
    let { id } = req.params;
    try {
      const regras_jogadores = await knex(tabela).select('Id').where('id', id).first();

      if (!regras_jogadores) {
        return res.json({ status: 'erro', message: 'Regra não existe.' })
      }
      await knex(tabela).delete().where('id', id);
      return res.json('ok')
    } catch (e) {
      return res.status(500).json({ message: e.message })
    }
  },


}