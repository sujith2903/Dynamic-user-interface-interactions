const menubar = document.querySelector('.menubar')
const ul = document.querySelector('ul')
const li = document.querySelector('li')

menubar.addEventListener('click', () => {
    ul.classList.toggle('pop')
})