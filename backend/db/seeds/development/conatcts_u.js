
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 4, nom: 'rowValue1ss',prenom:'pren1vv',pays:'what1dd'},
        {id: 5, nom: 'rowValue2ss',prenom:'pren2vv',pays:'what2dd'},
        {id: 6, nom: 'rowValue3ss',prenom:'pren3vv',pays:'what3dd'}
      ]);
    });
};
