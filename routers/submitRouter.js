var express = require('express');
var router = express.Router();
var Submit = require('../controllers/submitController');

router.get('/', Submit.list);

router.get('/:submitId', Submit.retrieve);

router.post('/', Submit.create);

router.put('/:submitId', Submit.update);

router.delete('/:submitId', Submit.destroy);

module.exports = router;