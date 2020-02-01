var express = require('express');
var app = express();
var routes = require('./src/routes/routes')
var bodyParser = require('body-parser')
require('./src/mongoose/index')

app.use(bodyParser.json())
app.use('/api', routes);

app.listen(3000);