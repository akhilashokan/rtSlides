document.addEventListener('readystatechange', () => {
	if (document.readyState === 'complete') {
		load();
	}
});

function load() {
	const slides = document.querySelector('.rt_slides');
	const wrapper = document.querySelector('.rt_wrapper');
	const width = wrapper.getBoundingClientRect().width;
	const max = (wrapper.childElementCount - 1) * width;
	rtSlideNav(slides, wrapper, width, max);
	keyListener(wrapper, width, max);
	// touchListner()
}
var xPos = 0;

function rtSlideNav(slidesContainer, wrapper, width, max) {
	let nav = slidesContainer.querySelector('.rt_navigation');
	nav.addEventListener('click', (e) => {
		if (e.target.accessKey === 'right' && xPos < max) {
			xPos += width;
		}
		if (e.target.accessKey === 'left' && xPos >= 0) {
			xPos -= width;
		}
		wrapper.style.transform = `translateX(-${xPos}px)`;
	});
}

function keyListener(wrapper, width, max) {
	document.addEventListener('keydown', ({ key }) => {
		if (key === 'ArrowRight' && xPos < max) {
			xPos += width;
		}
		if (key === 'ArrowLeft' && xPos >= 0) {
			xPos -= width;
		}
		wrapper.style.transform = `translateX(-${xPos}px)`;
	});
}

// function touchListner() {
//     wrapper.addEventListener("touchmove", (e) => {
//         let xPos = e.touches[0].clientX
//         console.log(e.touches[0].clientX);
//         wrapper.style.transform = `translateX(${xPos}px)`
//     }, { passive: true })
// }
