var express = require('express');
var app = express();
app.set('views', __dirname + '/src/');
app.use(express.static(__dirname + '/src/assets/'));

app.listen(1234, function(){
  console.log("Express server listening on port 1234");
});

app.get('/', function(req, res){
  res.render('index.jade');
});