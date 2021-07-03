
exports.up = function(knex) {
    return knex.schema.createTable('regras_time', function(table){
        table.increments('id').primary();
        table.int('golSofrido');
        table.int('empate');
        table.int('vitoria');
        table.int('derrota');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
