var fs = require('fs');
var rStream = fs.createReadStream(process.argv[2]);

rStream.pipe(process.stdout);
