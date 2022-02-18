const menuToggle = document.querySelector('.header-menu-toggle')
const menu = document.querySelector('.header-menu')

menuToggle.addEventListener('click', () => {
    menu.classList.add('active')
})

document.addEventListener('click', (e) => {
    if(!menu.contains(e.target) && !e.target.matches('.header-menu-toggle')) {
        menu.classList.remove('active')
    }
})