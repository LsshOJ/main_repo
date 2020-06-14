var express = require('express');
var router = express.Router();
var Problem = require('../controllers/problemController');

/*Using RESTful api*/
router.get('/', Problem.list);

router.get('/:problemId', Problem.retrieve);

router.post('/', Problem.create);

router.put('/:problemId', Problem.update);

router.delete('/:problemId', Problem.destroy);

module.exports = router;