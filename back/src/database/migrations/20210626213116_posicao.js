
exports.up = function(knex) {
    return knex.schema.createTable('posicao', function(table){
        table.increments('id').primary();
        table.string('nomePosicao');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
