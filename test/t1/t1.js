const fs = require('fs');
const http = require('http');
const requestHandler = require('./routes');

const server = http.createServer(requestHandler);

let port = 3000;
server.listen(port);


