
exports.up = function(knex) {
    return knex.schema.createTable('time', function(table){
        table.increments('id').primary();
        table.string('nomeTime');
        table.int('goleiro1');
        table.int('goleiro2');
        table.int('defesa1');
        table.int('defesa2');
        table.int('defesa3');
        table.int('defesa4');
        table.int('defesa5');
        table.int('defesa6');
        table.int('meioCampo1');
        table.int('meioCampo2');
        table.int('meioCampo3');
        table.int('meioCampo4');
        table.int('atac1');
        table.int('atac2');
        table.int('atac3');
        table.int('atac4');
        table.int('atac5');
        table.int('pontTime');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
