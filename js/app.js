const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const menuToggle = $('.header-menu-toggle')
const menu = $('.header-menu')
const prevBtn = $('.prev-btn')
const nextBtn = $('.next-btn')
const sliderList = $('.testimonial-list')
const sliderItems = $$('.testimonial-item')
const sliderLength = sliderItems.length

menuToggle.addEventListener('click', () => {
    menu.classList.add('active')
})
document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !e.target.matches('.header-menu-toggle')) {
        menu.classList.remove('active')
    }
})

// handle slider
let index = 0;
prevBtn.addEventListener('click', () => {
    handleChangeSlider(-1)
})
nextBtn.addEventListener('click', () => {
    handleChangeSlider(1)
})

function handleChangeSlider(status) {
    if(status === -1 && index > 0) {
        index--
    } else if(status === 1 && index < sliderLength - 1) {
        index++
    }
    let positionX = -1 * index * sliderList.offsetWidth 
    sliderList.style = `transform: translateX(${positionX}px)`
}