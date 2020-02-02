var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:admincaio@cluster0-y8nxy.gcp.mongodb.net/relations?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', function(err) {
    console.log(err);    
  });
db.once('open', function() {
  console.log('connected');  
});