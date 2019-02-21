const http = require('http');
const path = require('path');
const express = require('express');

const PATH_TO_CLIENT = path.join(__dirname, '../client');

const app = express();

app.use(express.static(PATH_TO_CLIENT));

const server = http.createServer(app);

server.listen(3000, () => {
    console.log('Server listening on port 3000');
})