var http = requires('http');
var fs = requires('fs');

const PORT =8080;
fs.readFile('.index.html',function(error,html){
  if(error) throw error;
  http.createServer(function(request,respone){
    response.writeHeader(200,{"Content-Type":"text/html"});
    response.write(html);
    response.end();
  }).listen(PORT);
})
