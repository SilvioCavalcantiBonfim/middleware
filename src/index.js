const express = require('express');
const cors = require('cors');
require('dotenv').config();

const API = express();

API.use(cors());

API.get('/', (req,res) => {
    res.send({states: `ok`})
})

// API.get('/REQUEST/CORS', cors(options), async (req, res) => {
//     await fetch(req.headers.endpoint, req.headers.headers).then(async r => {
//         res.status(200).send(await r.json());
//     }).catch(e => res.status(200).send({code: 1001, description: 'Invalid endpoint in request.'}));
// })


API.listen(process.env.API_PORT || 3001);

module.exports = API;