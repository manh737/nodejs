const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const post = process.env.POST || 3000;
server.listen(post)