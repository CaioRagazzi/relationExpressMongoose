var mongoose = require('mongoose')

var employeeSchema = require('../schemas/employee')

var employee = mongoose.model('Employee', employeeSchema)

module.exports = employee