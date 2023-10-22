const http = require('http');
const fileSystem = require('fs');
const homePageOfSite = require('./homw');
const students = require('./students');
const rightNow = require('./now');
const { error } = require('console');




const requestHandler = (request, response) => {
    const url = request.url;
    switch(url){
        case '/':
            homePageOfSite(request, response);
            break;
        case '/students':
            students(request, response);
            break;
        case '/now':
            rightNow(request, response);
            break;
        default:
            response.end();
            break;
    }
    console.log('request = ', request.url);
}


const server = http.createServer(requestHandler);

server.listen(3000);
console.log("my server started");
