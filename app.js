var express = require('express');
var bodyParser = require('body-parser');

var app = express();
const host = '0.0.0.0';
const port = process.env.PORT || 5000;

app.set('port', port);
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());
app.get('/', function(req, res){
    res.render('index.html');
});

app.get('/privacy_policy', function(req, res){
    res.render('privacy_policy.html');
});

app.get('/globe', function(req, res){
    res.render('globe.html');
});

app.use(express.static(__dirname + '/css' ));


app.listen(port, host, function() {
  console.log("Server started.......");
});