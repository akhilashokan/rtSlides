/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/rtSlides.js ***!
  \*************************/
document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    load();
  }
});
var xPos = 0;
var width = 0;
var max = 0;

function load() {
  const slides = document.querySelector('.rt_slides');
  const wrapper = document.querySelector('.rt_wrapper');
  width = wrapper.getBoundingClientRect().width;
  max = (wrapper.childElementCount - 1) * width;
  rtSlideNav(slides, wrapper);
  keyListener(wrapper); // touchListner()
}

function rtSlideNav(slidesContainer, wrapper) {
  let nav = slidesContainer.querySelector('.rt_navigation');
  nav.addEventListener('click', e => {
    if (e.target.accessKey === 'right' && xPos < max) {
      xPos += width;
    }

    if (e.target.accessKey === 'left' && xPos >= 0) {
      xPos -= width;
    }

    wrapper.style.transform = `translateX(-${xPos}px)`;
  });
}

function keyListener(wrapper) {
  document.addEventListener('keydown', _ref => {
    let {
      key
    } = _ref;

    if (key === 'ArrowRight' && xPos < max) {
      xPos += width;
    }

    if (key === 'ArrowLeft' && xPos >= 0) {
      xPos -= width;
    }

    wrapper.style.transform = `translateX(-${xPos}px)`;
  });
} // function touchListner() {
//     wrapper.addEventListener("touchmove", (e) => {
//         let xPos = e.touches[0].clientX
//         console.log(e.touches[0].clientX);
//         wrapper.style.transform = `translateX(${xPos}px)`
//     }, { passive: true })
// }
/******/ })()
;
//# sourceMappingURL=rtSlides.js.map