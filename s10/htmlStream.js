var through = require('through');
var trumpet = require('trumpet');
var tr = trumpet();

var stream = tr.select('.loud').createStream();

stream.pipe(through(function (data) {
  this.queue(data.toString().toUpperCase());
})).pipe(stream);

process.stdin.pipe(tr).pipe(process.stdout);
