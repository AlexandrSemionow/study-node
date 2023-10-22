const http = require('http');
const fileSystem = require('fs');

const now = (request, response) => {
    const pageContent = "today is " + new Date().toLocaleTimeString();
    response.writeHead(200, {"Content-Type": 'text/html'});
    response.write(pageContent);
    response.end();
}

module.exports = now;