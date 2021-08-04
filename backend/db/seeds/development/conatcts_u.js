
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, nom: 'rowValue1',prenom:'pren1',pays:'what1'},
        {id: 2, nom: 'rowValue2',prenom:'pren2',pays:'what2'},
        {id: 3, nom: 'rowValue3',prenom:'pren3',pays:'what3'}
      ]);
    });
};
