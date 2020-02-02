var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var employeeSchema =  require('../schemas/employee')

var company = new Schema({
  name:  {
    type: String,
    maxlength: 50
  }, // String is shorthand for {type: String}
  employees: [employeeSchema]
});

module.exports = company