var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");
var md5 = require('js-md5');
var mysql = require("mysql");
var ejs = require("ejs");

var config = require('./config/config.json');

var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);

var sessionStore = new MySQLStore(config.sessionOptions);
var app = express();

var connection = mysql.createConnection(config.databaseOptions);

app.use(session({
        key: '',
        secret: 'secret',
        store: sessionStore,
        resave: true,
        saveUninitialized: true,
    })
);

app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

app.set('json spaces', 40);

app.set('views',__dirname + 'views');
app.set('view engine','ejs');

app.get('/', function(req, res){
    var ses = req.session;
    console.log(ses);
    if(ses.user) {
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
});

app.get('/login', function(req, res){
    var ses = req.session;
    ses.user = "test";
    res.redirect('/');
});

app.get('/logout', function(req, res){
    req.session.destroy();
});

app.get('/home', function(req, res){
    //send home page
    res.render(path.join(__dirname, "/views/pages","home.ejs"));
});

app.get('/sales', function(req, res){
    //send sale page
    res.render(path.join(__dirname, "/views/pages", "sales.ejs"));
});

app.post('/sales', function(req, res){
    console.log(req.body);
});

app.post('/sales/get-product', function(req, res){
    var item = parseInt(req.body.item);
    var query = "SELECT p.productCode, p.productType, p.productStyle, p.productGender,\
                 p.productSize, p.productCost FROM products p WHERE p.productCode=?";
    var table = item;
    query = mysql.format(query, table);
    console.log(query);
    connection.query(query, function(err, rows) {
        if(err) console.log(err);
        res.json(rows);
    });
});

app.get('/inventory', function(req, res){
    //send inventory page
});

app.get('/reports', function(req, res){
    //send reports page
});

app.get('/products', function(req, res){
    //send product search page
    var query = "SELECT p.productCode, p.productType, p.productStyle, p.productGender,\
                 p.productSize, p.productSecondHand, p.productQuantity, p.productCost FROM products p";
    query = connection.query(query, function(err, rows){
        res.render(path.join(__dirname, "/views/pages", "products.ejs"), {data:rows})
    })
});

app.listen(config.server.port,function() {
	console.log("Listening on " + config.server.port.toString());
});