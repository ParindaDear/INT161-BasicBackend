const http = require('node:http');

const server = http.createServer((req, res) => {
        let body = '';
        req.on('data', chunk => { body += chunk; });
        req.on('end', () => {
            const jsonObj = JSON.parse(body);
            const number = parseInt(jsonObj.number);
            res.write(`Multiplication of ${number}:\n`);
            for (let i = 1; i <= 12; i++) {
                res.write(`${number} x ${i} = ${number * i}\n`);
            }
            res.end();
        });
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
