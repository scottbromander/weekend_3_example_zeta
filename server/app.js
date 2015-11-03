var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var index = require('./routes/index');
var math = require('./routes/math');
var multi = require('./routes/multi');

app.set('port', (process.env.PORT || 5000));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({expanded: true}));


app.use('/math', math);
app.use('/math/multi', multi);
app.use('/', index);

app.listen(app.get('port'), function(){
   console.log("Server us up! Port: " + app.get('port'));
});