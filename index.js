var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var PORT = process.env.PORT || 3000;

var config = require('./config/config.json');
var connection = mysql.createConnection(config.databaseOptions);

var app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

app.post('/sale/addproduct', function(req, res){
    try {
        var saleISBN = parseInt(req.body.saleISBN);
        var query = mysql.format("SELECT p.productCode, p.productType, p.productStyle, p.productGender,\
                                  p.productSize, p.productCost FROM products p WHERE p.productCode=?",[saleISBN]);
        connection.query(query, function(err, rows){
           if(err) { console.log(err) }
           console.log(rows);
           res.json(rows); 
        });
    } catch(err) {
        console.log(err);
    }
});

app.get('*', function(req, res){
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(){
    console.log(`Listening on ${PORT}....`);
});