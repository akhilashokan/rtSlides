document.addEventListener('readystatechange', () => {
    if (document.readyState === "complete") {
        load()
    }
})

function load() {
    let slides = document.querySelector('.rt_slides')
    let wrapper = document.querySelector('.rt_wrapper')
    let width = wrapper.getBoundingClientRect().width
    let nav = slides.querySelector('.rt_navigation')
    var xPos = 0
    let max = (wrapper.childElementCount - 1) * width
    nav.addEventListener('click', (e) => {
        console.log(xPos, max);
        if (e.target.accessKey === 'right' && xPos < max) {
            xPos += width
        }
        if (e.target.accessKey === 'left' && xPos >= 0) {
            xPos -= width
        }
        wrapper.style.transform = `translateX(-${xPos}px)`
    })
}