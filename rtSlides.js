document.addEventListener('readystatechange', () => {
	if (document.readyState === "complete") {

		document.removeEventListener('readystatechange', this)
	}
});



