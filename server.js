var http = require('http');
var fs = require('fs');

const PORT =8080;
fs.readFile('./index.html',function(error,html){
  http.createServer(function(request,respone){
    response.writeHeader(200,{"Content-Type":"text/html"});
    response.write(html);
    response.end();
  }).listen(PORT);
})
