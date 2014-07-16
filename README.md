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


DUPLEXER REDUX
--------------

This module takes in a readable stream and passes that directly to the
duplexer as the readable entity.

The writable takes an input stream and passes it to through(write, end)

On write, through find the "country" form from the data and checks if
that entry already exists.  If it does, the count is incremented for
that entry.  If not, that entry is created with a count of 1.

On end, through calls the "counter" stream's setCount() and passes in
the counts object that the method has been creating.
