var express = require("express");
var session = require("express-session");
var app = express();
app.use(session({secret: "yamakemykokorogodokidokidonchaknow"}));

var path = require("path");
app.use(express.static(path.resolve(__dirname, "static")));
app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
    if(!request.session.counter) {
        request.session.counter = 1;
    } else {
        request.session.counter += 1;
    }
    response.render('counter', {counter: request.session.counter})
});

app.get('/2', function(request, response) {
    if(!request.session.counter) {
        request.session.counter = 1;
    } else {
        request.session.counter += 1;
    }
    response.redirect('/');
});

app.get('/reset', function(request, response) {
    request.session.counter = 0;
    response.redirect('/');
});

app.listen(8000, function() {
    console.log("listening on port 8000");
});