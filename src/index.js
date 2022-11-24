const express = require('express');
require('dotenv').config();

const API = express();
require('./routes')(API);
API.use(express.json())

API.listen(process.env.API_PORT || 8000);

module.exports = API;