var split = require('split');
var through = require('through');
var tr = through(write);
var odd = true;

function write(line) {
  var line = line.toString();
  this.queue(odd === false ? line.toUpperCase()+'\n' : line.toLowerCase()+'\n');
  odd = !odd;
}

process.stdin.pipe(split('\n')).pipe(tr).pipe(process.stdout);
