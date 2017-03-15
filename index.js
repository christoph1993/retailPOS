var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(){
    console.log(`Listening on ${PORT}....`);
});