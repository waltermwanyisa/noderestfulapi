const http = require('http');
const url = require('url');

const server = http.createServer(function(req, res){

    // Get url and parse it
    let parsedUrl = url.parse(req.url, true);
    
    // get the path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // Get the HTTP Method
    var method = req.method.toLocaleLowerCase();

    // send the response
    res.end('Hello World\n');

    // logging the request path
    console.log('Request received on path: '+trimmedPath, 'with method: '+method);

})

server.listen(3000, function(){
    console.log('The server is listening on port 3000 now');
})