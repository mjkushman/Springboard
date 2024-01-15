const p = document.querySelector('p');
p.addEventListener('click', function(e) {
	//console.log(e); //log the whole e
	console.log(e.type); //what type of event?
	console.log(e.pageX); //where on the page?
	console.log(e.target); //what element was clicked on? (try clicking the <b> tag inside the paragraph)
	//console.dir(e); //dir the whole e
});

p.addEventListener('mousedown', function(e) {
	console.log(e.type); // triggers on downpress of mouse button
});

p.addEventListener('mouseup', function(obbbbyject) {
	console.log(obbbbyject.type); // triggers on release of mouse button
	console.log(obbbbyject.eventPhase); // triggers on release of mouse button
});
