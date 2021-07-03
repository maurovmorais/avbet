
exports.up = function(knex) {
    return knex.schema.createTable('jogadores', function(table){
        table.increments('id').primary();
        table.string('nomePlayer');
        table.string('time');
        table.string('posicao');
        table.boolean('status');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
