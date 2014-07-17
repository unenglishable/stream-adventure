var through = require('through');

module.exports = function() {
  var genre = '';
  var books = [];
  var JSONList = [];
  return through(function (data) {
    console.log(data)
    data = data.split('\n');
    data.forEach(function (line) {
      line= JSON.parse(line);
      if (line.type === 'genre') {
        if (genre != '') {
          JSONList.push(JSON.stringify({name: genre, books: books}));
          console.log(JSONList.join('\n'));
          books = [];
        }
        genre = line.name;
      }
      else if (line.type === 'book') {
        books.push(line.name);
      }
    });
    console.log(JSONList.join('\n'));
  });
}
