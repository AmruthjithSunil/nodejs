const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log('url : '+req.url, 'method : '+req.method, 'headers : '+req.headers);
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        fs.readFile('message.txt', 'utf-8', (err, data) => {
            res.write(data);
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></input></form></body>');
            res.write('</html>');
            return res.end();
        })
    }
    if(req.url === '/message' && req.method === 'POST'){
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        })
    }
});

server.listen(4000);