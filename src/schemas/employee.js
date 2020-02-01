var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employee = new Schema({
  name:  String,
});

module.exports = employee