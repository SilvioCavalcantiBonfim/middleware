const express = require('express');
const cors = require('cors');
const {version, name} = require('../package.json');
require('dotenv').config();

const API = express();

API.use(cors());

API.get('/', (req,res) => {
    res.send({version: version, name: name})
})

API.get('/REQUEST', async (req, res) => {
    await fetch(req.headers.endpoint, req.headers.headers).then(async r => {
        res.status(200).send(await r.json());
    }).catch(e => res.status(200).send({code: 1001, description: 'Invalid endpoint in request.'}));
})


API.listen(process.env.API_PORT || 3001);

module.exports = API;