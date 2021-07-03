
exports.up = function(knex) {
    return knex.schema.createTable('jogos', function(table){
        table.increments('id').primary();
        table.datetime('dataJogo');
        table.string('vencIntervalo');
        table.string('vencJogo');
        table.int('placarA');
        table.int('placarB');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
