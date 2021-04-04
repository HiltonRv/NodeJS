const express = require('express');
const app = express();

// star database
require('./utils/connection')


//import rutas
app.use('/mascotas', require('./routes/mascotas.routes'))

module.exports = app;