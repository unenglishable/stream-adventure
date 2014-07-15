var http = require('http');
var through = require('through');
var tr = through(write);

var server = http.createServer(function (req, res) {
  req.pipe(tr).pipe(res);
});

server.listen(parseInt(process.argv[2]));
function write (data) {
  this.queue(data.toString().toUpperCase());
}
