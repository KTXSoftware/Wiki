var rendertime = 10;
var frametime = 16;

var Buffer = function () {
	this.rendered = 0;
	this.framed = 0;
};

var buffers = [new Buffer(), new Buffer(), new Buffer()];

var waited = 0;
var ms = 0;
var runtime = 2000;

for (; ms < runtime; ++ms) {
	// render
	var renderedSomething = false;
	for (var i = buffers.length - 1; i >= 0; --i) {
		if (buffers[i].rendered < rendertime) {
			buffers[i].rendered += 1;
			renderedSomething = true;
			break;
		}
	}
	if (!renderedSomething) ++waited;

	// frame
	if (buffers[buffers.length - 1].rendered === rendertime) buffers[buffers.length - 1].framed += 1;
	if (buffers[buffers.length - 1].framed >= frametime) {
		var last = buffers.pop();
		last.framed = 0;
		last.rendered = 0;
		buffers.unshift(last);
	}
}

console.log('Waited ' + waited + ' of ' + runtime + ' milliseconds (' + ((waited / runtime) * 100) + '%).');
