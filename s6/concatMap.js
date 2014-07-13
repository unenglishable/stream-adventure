var map = require('through2-map');
process.stdin.pipe(map(function (chunk) {
  return chunk.toString().split('').reverse().join('');
})).pipe(process.stdout);
