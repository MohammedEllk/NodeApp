const express = require('express');

const app = express();

app.use((req, res) => {
    res.json({ message: 'Bingo !' }); 
 });


module.exports = app;