const cors = require('cors');
const controllers = require('../controllers');


module.exports = (api) => {
    api.get('/REQUEST/CORS', cors(), controllers.request_cors);
}