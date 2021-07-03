
exports.up = function(knex) {
    return knex.schema.createTable('apostas', function(table){
        table.increments('id').primary();
        table.int('UserId');
        table.int('melhorDef1');
        table.int('melhorDef2');
        table.int('melhorDef3');
        table.int('melhorMC1');
        table.int('melhorMC2');
        table.int('melhorAtac1');
        table.int('melhorAtac2');
        table.int('melhorMA');
        table.int('golBonito');
        table.int('primeiroGol');
        table.string('resultado');
        table.int('placarAintervalo');
        table.int('placarBintervalo');
        table.int('placarAfinal');
        table.int('placarBfinal');
        table.int('melhorGoleiro');
        table.timestamp('criado').defaultTo(knex.fn.now());
        table.timestamp('atualizado');    
      })  
    };

exports.down = function(knex) {
  
};
