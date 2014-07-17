var through = require('through');
var combine = require('stream-combiner');

var crypto = require('crypto');
var cipherName = process.argv[2];
var cipherPass = process.argv[3];
var decipher = crypto.createDecipher(cipherName, cipherPass);

var zlib = require('zlib');
var gunzip = zlib.createGunzip();

var fs = require('fs');

var tar = require('tar');
var untar = tar.Parse();
untar.on('entry', function (entry) {
  if (entry.type === 'File') {
    var md5 = crypto.createHash('md5', { encoding: 'hex'});
    var tr = through(null, end);

    combine(
      entry,
      md5,
      tr
      ).pipe(process.stdout);

    function end () {
      console.error("no, fuck you");
      this.queue(' ' + entry.path + '\n');
    }
  }
});

combine(
    process.stdin,
    decipher,
    gunzip,
    untar
    );
