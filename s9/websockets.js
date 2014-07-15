var ws = require('websocket-stream');
var wsStream = ws('http://localhost:8000');

wsStream.end('hello\n');
