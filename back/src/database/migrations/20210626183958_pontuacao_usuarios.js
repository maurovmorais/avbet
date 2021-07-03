
exports.up = function(knex) {
    return knex.schema.createTable('pontuacao_usuarios', function(table){
        table.increments('id').primary();
        table.int('userID');
        table.int('acumulado');
        table.int('aposta');
        table.int('pontuacao');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
