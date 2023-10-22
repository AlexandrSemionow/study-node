const http = require('http');
const fileSystem = require('fs');

const students = (request, response) => {
    fileSystem.readFile(
        './students.html',
        'UTF-8',     
        (error, fileContent) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(fileContent);
            response.end();
        }
    );
}

module.exports = students;