exports.up = function(knex) {
    return knex.schema.createTable('contacts', function(table) {
        table.increments();
        table.string('nom');
        table.string('prenom');
        table.string('pays');
        
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('contacts');
};