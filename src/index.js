const express = require('express');
const cors = require('cors');
require('dotenv').config();

const API = express();

API.use(cors());
API.use(express.json())

API.get('/', (req, res) => {
    res.send("Express on Vercel");
})

API.get('/REQUEST/CORS', cors(),async (req, res, next) => {
    await fetch(req.headers.endpoint, req.headers.headers).then(async r => {
        res.status(200).send(await r.json());
    }).catch(e => res.status(200).send({code: 1001, description: 'Invalid endpoint in request.'}));
})

API.listen(process.env.API_PORT || 80);

module.exports = API;