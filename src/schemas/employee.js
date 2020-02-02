var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employee = new Schema({
  name:{
    type: String,
    required: true
  },
});

module.exports = employee