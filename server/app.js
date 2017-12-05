const express = require('express');
const app = express();

require('./config/path')(app);
require('./config/passport')(app);
require('./config/express')(app);
require('./config/routesConfig')(app);
require('./config/errorHandler')(app);

module.exports = app;
