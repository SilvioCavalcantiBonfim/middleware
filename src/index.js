const express = require('express');
const cors = require('cors');
require('dotenv').config();

const API = express();
require('./routes')(API);
API.use(express.json())

API.get('/', (req, res) => {
    res.send("Express on Vercel");
})

API.use(cors());

API.listen(process.env.API_PORT || 8000);

module.exports = API;