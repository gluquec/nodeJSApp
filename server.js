
var http = require('http');
 
 http.createServer(function(req, res){
	res.writeHead(200, {'Content-type':'text/plain'});
	res.end('Hello');
 }).listen(1334, '127.0.0.1');
 
 console.log('Everything ok, web server has started');