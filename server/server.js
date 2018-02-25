var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var WIWrouter = require('./routes/WIWrouter.js');

var port = 5000;

app.use(bodyParser.json());
app.use(express.static('./server/public'));
app.use('/login', WIWrouter);

app.listen(port, function(){
    console.log('Listening on port:', port);
 });