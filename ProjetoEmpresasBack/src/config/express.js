const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  [process.env.NODE_ENV]: { version, corsOptions },
} = require('./env');
const routes = require('../routes');

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.set('port', process.env.PORT || 3000);

Object.keys(routes).forEach(key => app.use(`/api/${version}/${key}`, routes[key]));

module.exports = app;
