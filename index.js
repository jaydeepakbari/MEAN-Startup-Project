const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require ('path');
const http = require('http');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true }))
app.use("/dist", express.static(path.join(__dirname, "dist")))

app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'application/views'));
app.set('view engine', 'ejs');
app.set('port', 8000);

require('./application/routes')(app);

const server = http.createServer(app);
server.listen(8000);

module.exports = app;