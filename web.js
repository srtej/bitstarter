var express = require('express');
var app = express.createServer(express.logger());


var fs = require('fs');
var infile = "index.html";
var content = fs.readFileSync(infile);




var content1 = "ravitej is testing" 








app.get('/', function(request, response) {
  response.send(content1);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
