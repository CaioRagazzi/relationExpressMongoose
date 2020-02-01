var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var company = new Schema({
  name:  String, // String is shorthand for {type: String}
});

module.exports = company