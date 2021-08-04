const express = require('express');

const app = express();

const Contact = require('./models/Contact')
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use('/api/contact', (req, res, next) => {
    Contact.query()
    .then(contacts => {
      res.json(contacts)
    })
  });


module.exports = app;