var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('./server/public'));

app.listen(port, function(){
    console.log('server is running on port: ', port);
})