var concat = require('concat-stream');
var duplexer = require('duplexer');
var through = require('through');

module.exports = function (counter) {
  var counts = {};
  return duplexer(through(write, end), counter);

  function write (data) {
    var country = data.country;
    var count = 0;
    if (counts.hasOwnProperty(country)) {
      count = counts[country];
    }
    else {
      count = 0;
    }
    counts[country] = count+1;
  }
  function end () {
    counter.setCounts(counts);
  }
}

