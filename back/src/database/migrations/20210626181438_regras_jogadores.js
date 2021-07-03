
exports.up = function(knex) {
    return knex.schema.createTable('regras_jogadores', function(table){
        table.increments('id').primary();
        table.int('tomarGolGoleiro');
        table.int('fazerFalta');
        table.int('fazerPenalti');
        table.int('naoCompareceu');
        table.int('golContra');
        table.int('entrarCampo');
        table.int('ole');
        table.int('trave');
        table.int('gol');
        table.int('assistencia');
        table.int('defPenalti');
        table.int('perferPenalti');
        table.int('defesa');
        table.int('cardAmarelo');
        table.int('cardVermelho');
        table.int('rapadura');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };
exports.down = function(knex) {
  
};
