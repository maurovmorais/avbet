
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table){
        table.increments('id').primary();
        table.string('nomeUser');
        table.string('email');
        table.string('senha');
        table.string('token');
        table.boolean('resetsenha');
        table.integer('codigoreset');
        table.string('perfil');
        table.boolean('status');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
