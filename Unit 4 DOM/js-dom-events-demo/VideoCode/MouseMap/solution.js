document.addEventListener("DOMContentLoaded", function(){
	colorThing();
} )

function colorThing() {document.addEventListener('mousemove', function(e) {
	//take the ratio of the mouse X vs. the entire window available X
	// and compute the equivalent color value from 0-255:
	const r = Math.round(e.pageX * 255 / window.innerWidth);
	const g = Math.round(e.pageX * 255 / window.innerWidth);
	const b = Math.round(e.pageX * 255 / window.innerWidth);
	// Make lightness the Y:
	const a = e.pageY / window.innerHeight;
	// Make our rgb formatted color string:
	const color = `rgba(${r},${g},${b},${a})`;
	//Set the body backgroundColor!
	document.body.style.backgroundColor = color;
	console.log(color);
});
}