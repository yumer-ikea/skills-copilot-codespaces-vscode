// create a web server
var http = require('http');
var fs = require('fs');
var qs = require('querystring');
var comments = [];
var server = http.createServer(function(req, res){
    if(req.method === 'POST'){
        var body = '';
        req.on('data', function(chunk){
            body += chunk;
        });
        req.on('end', function(){
            var comment = qs.parse(body);
            comments.push(comment.comment);
            res.end('Success');
        });
    } else if(req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(comments));
    }
});
server.listen(3000);