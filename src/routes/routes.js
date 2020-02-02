var express     = require('express');
var router      = express.Router();
var company     = require('../controllers/company')
var employee     = require('../controllers/employee')

router.use('/company', company);
router.use('/employee', employee);

module.exports = router;