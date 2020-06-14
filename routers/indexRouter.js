var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.json({ message: 'Hi，this is restFul API' });
});

module.exports = router;