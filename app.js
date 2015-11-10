'use strict';

var PORT = process.env.PORT || 3000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var marked = require('marked');

var app = express();

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.set('view engine','jade');

app.use(morgan('dev'));
app.use(jsonParser);
app.use(urlencodedParser);
app.use(express.static('public'));

app.get('/',function(req,res){
  res.render('main');
});

app.get('/convert',function(req,res){
  res.render('convert');
});

app.post('/convert',function(req,res){
  var html = marked(req.body.text);
  res.send(html);
})

app.listen(PORT);

