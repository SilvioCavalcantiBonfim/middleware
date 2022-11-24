const express = require('express');
const cors = require('cors');
require('dotenv').config();

const API = express();

var corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

API.get('/REQUEST/CORS', cors(corsOptions), async (req, res) => {
    await fetch(req.headers.endpoint, req.headers.headers).then(async r => {
        res.status(200).send(await r.json());
    }).catch(e => res.status(200).send({code: 1001, description: 'Invalid endpoint in request.'}));
})

API.listen(process.env.API_PORT || 80);

module.exports = API;