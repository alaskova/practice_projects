const http = require('http');

const server = http.createServer(function(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.end('ok');
});

server.listen(3000, '127.0.0.1', function() {
    console.log('Server running at http://127.0.0.1:3000/');
});