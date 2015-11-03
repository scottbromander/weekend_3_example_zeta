var express = require('express');
var router = express.Router();

var add = require('../modules/add');
var subtract = require('../modules/subtract');
var multi = require('../modules/multi');
var divide = require('../modules/divide');

router.post('/add', function(req,res){
    var entryX = parseInt(req.body.entryX);
    var entryY = parseInt(req.body.entryY);

    var mathResult = add(entryX,entryY);
    mathResult = mathResult.toString();
    res.send(mathResult);
});

router.post('/subtract', function(req,res){
    var entryX = parseInt(req.body.entryX);
    var entryY = parseInt(req.body.entryY);

    var mathResult = subtract(entryX,entryY );
    mathResult = mathResult.toString();
    res.send(mathResult);
});
//
//router.post('/multi', function(req,res){
//    var entryX = parseInt(req.body.entryX);
//    var entryY = parseInt(req.body.entryY);
//
//    var mathResult = multi(entryX,entryY );
//    mathResult = mathResult.toString();
//    res.send(mathResult);
//});

router.post('/divide', function(req,res){
    var entryX = parseInt(req.body.entryX);
    var entryY = parseInt(req.body.entryY);

    var mathResult = divide(entryX,entryY );
    mathResult = mathResult.toString();
    res.send(mathResult);
});

module.exports = router;