var express = require('express');
var bodyParser = require('body-parser');
var Sequelize = require('sequelize');

//config
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

//routers
var indexRouter = require('./routers/indexRouter');
var problemRouter = require('./routers/problemRouter');
var submitRouter = require('./routers/submitRouter');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/problem', problemRouter);
app.use('/submit', submitRouter);

//view engine
/*
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
*/

//error handler
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.listen(3000);