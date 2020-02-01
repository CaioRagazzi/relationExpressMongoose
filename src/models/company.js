var mongoose = require('mongoose')

var companySchema = require('../schemas/company')

var company = mongoose.model('Company', companySchema)

module.exports = company