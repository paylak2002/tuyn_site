var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('.'));
app.get('/',function(req,res){
  res.sendFile(__dirname + '/home.html');
});

app.listen(port);
