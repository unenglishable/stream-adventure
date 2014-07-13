STREAMS ADVENTURE
=================

My solutions to stream-adventure tutorial for node.

Run 'npm install' to download and install all dependencies.

TRANSFORM
---------

through returns a read/writeable stream, given (optionally)
a write and an end function:

~~~
var tr = through(write, end);

function write (buf) {
  // Do something with buf
}

function end () {
  // What to do on end
}

process.stdin.pipe(tr).pipe(process.stdout);
~~~
