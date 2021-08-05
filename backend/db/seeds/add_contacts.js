
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([
        {id: 1, nom: 'Ellouke',prenom:'Mohammed',pays:'Maroc'},
        {id: 2, nom: 'Fikri',prenom:'Yassine',pays:'Maroc'},
        {id: 3, nom: 'Cyril',prenom:'Michel',pays:'France'}
      ]);
    });
};
