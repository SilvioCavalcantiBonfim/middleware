const express = require('express');
require('dotenv').config();

const API = express();
require('./routes')(API);
API.use(express.json())

API.get('/', (req, res) => {
    res.send("Express on Vercel");
})

API.listen(process.env.API_PORT || 8000);

module.exports = API;