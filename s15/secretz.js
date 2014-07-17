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
  var md5 = crypto.createHash('md5');
  filename = entry.path;
  if (entry.type === 'File') {
    entry.on('data', function (data) {
      md5.update(data);
    });
    entry.on('end', function () {
      var hash = md5.digest('hex');
      console.log(hash+' '+filename);
    });
  }
});

combine(
    process.stdin,
    decipher,
    gunzip,
    untar
    );
