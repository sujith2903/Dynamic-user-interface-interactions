const menubar = document.querySelector('.menubar')
const more = document.querySelector('.more-wrapper')
const menuItems = document.querySelector('.menu-items')
const menuItem = document.querySelector('.menu-item')
const moreItems = document.querySelector('.more-items')
const moreItem = document.querySelector('.more-item')

menubar.addEventListener('mouseover', () => {
    menuItems.classList.add('pop')
})

menubar.addEventListener('mouseout', () => {
    menuItems.classList.remove('pop')
})

more.addEventListener('mouseover', () => {
    moreItems.classList.add('pop')
})

more.addEventListener('mouseout', () => {
    moreItems.classList.remove('pop')
})