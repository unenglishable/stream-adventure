var combine = require('stream-combiner');
var split = require('split');
var through = require('through');
var zlib = require('zlib');

module.exports = function() {
  var books = [];
  var genre = '';
  return combine(
      split('\n'),
      through(function (data) {
        if (data != '') {
          data = JSON.parse(data);
          if (data.type === 'genre' || data.type === '') {
            if (genre != '') {
              this.queue(JSON.stringify({name: genre, books: books})+'\n');
            }
            genre = data.name;
            books = [];
          }
          else if (data.type === 'book') {
            books.push(data.name);
          }
          else {
            console.error('Oh shit!');
          }
        }
        else {
          this.queue(JSON.stringify({name: genre, books: books})+'\n');
        }
      }),
      zlib.createGzip()
        );
}
