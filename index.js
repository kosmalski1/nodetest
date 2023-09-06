var http = require('http');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('gudddwnodfcff');
    res.end('adres ip klienta: '+ req.socket.remoteAddress);
}).listen(8080);