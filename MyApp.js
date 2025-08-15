const http = require('node:http')
const server = http.createServer((req, res) => {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.write('http version: ' + req.httpVersion + '\n');
    res.write('url: ' + req.url + '\n');
    res.write('rawHeaders: ' + req.rawHeaders + '\n---------\n\n');
    res.write('method: ' + req.method + '\n');
    res.write('headers.user-agent: ' + req.headers["user-agent"] + '\n');
    res.end('headers.host: ' + req.headers.host + '\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
server.on('request', (req, res) => {
    console.log('Request received: ' + req.headers.host+ req.url
        + ', Method: ' + req.method);
});
