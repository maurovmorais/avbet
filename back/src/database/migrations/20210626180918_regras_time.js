
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        table.increments('id').primary();
        table.string('regra');
        table.string('regra');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
