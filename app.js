const http = require('http');

const server = http.createServer((req, res) => {
    console.log('url : '+req.url, 'method : '+req.method, 'headers : '+req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    switch(req.url){
        case '/': res.write('<body><h1>Hello from my Node.js Server!</h1></body>'); break;
        case '/home': res.write('<body><h1>Welcome Home</h1></body>'); break;
        case '/about': res.write('<body><h1>Welcome to About Us page</h1></body>'); break;
        case '/node': res.write('<body><h1>welcome to my Node.js project</h1></body>'); break;
    }
    res.write('</html>');
    res.end();
});

server.listen(4000);