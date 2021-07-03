
exports.up = function(knex) {
    return knex.schema.createTable('time', function(table){
        table.increments('id').primary();
        table.string('nomeTime');
        table.string('jogadorPosicao');
        table.integer('pontTime');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
