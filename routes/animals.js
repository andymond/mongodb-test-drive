var express = require('express');
var router = express.Router();
var AnimalsController = require('../controllers/animals_controller')

/* GET users listing. */
router.get('/', function(req, res, next) {
  AnimalsController.index(req, res, next)
});

module.exports = router;
