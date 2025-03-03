var bigpic = document.getElementById('bigpic');

function nav(page) {   
	window.location.href=page;
}

function gallery(number) {
	bigpic.src = `images/photos/${parseInt(number)}.png`;
}

function pick_location(name) {
	[...document.getElementsByClassName('location')].forEach(loc=>{ loc.style.display = 'none'; })
	document.getElementById(name).style.display = 'block';
}

[...document.getElementsByTagName('img')].forEach(img => {
	if (img.hasAttribute('alt') && !img.hasAttribute('title')) {
		img.title = img.alt;
	}
});