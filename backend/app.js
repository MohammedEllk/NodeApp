const express = require('express');

const app = express();
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use('/api/contact', (req, res, next) => {
    const stuff = [
      {
        _id: '1',
        nom: 'Mohammed',
        prenom: 'Ellouke',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        pays : 'maroc',
        userId: 'qsomihvqios',
      },
      {
        _id: '2',
        nom: 'Taoufiq',
        prenom: 'Ouarki',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        pays : 'maroc',
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });


module.exports = app;