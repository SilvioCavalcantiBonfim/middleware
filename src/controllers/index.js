

exports.request_cors = async (req, res, next) => {
    await fetch(req.headers.endpoint, req.headers.headers).then(async r => {
        res.status(200).send(await r.json());
    }).catch(e => res.status(200).send({code: 1001, description: 'Invalid endpoint in request.'}));
}