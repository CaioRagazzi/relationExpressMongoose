var express     = require('express');
var router      = express.Router();
var company     = require('../controllers/company')

router.use('/company', company);

module.exports = router;