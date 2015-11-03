var express = require('express');
var router = express.Router();

var multi = require('../modules/multi');

router.post('/', function(req,res){
    var entryX = parseInt(req.body.entryX);
    var entryY = parseInt(req.body.entryY);

    var mathResult = multi(entryX,entryY );
    mathResult = mathResult.toString();
    res.send(mathResult);
});

module.exports = router;