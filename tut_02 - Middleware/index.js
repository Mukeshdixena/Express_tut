var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
    res.send("this always run");
    next(); // this will redirect to next
});
app.get('/about', function (req, res, next) {
    res.send("at 'about' page");
});
app.get('/', function (req, res, next) {
    res.send("Hello world! from root");
});

app.listen(3000);