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

const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow')
const photos = document.querySelector('.photos')
const dots = document.querySelector('.dots')
let currentSlide
let nextSlide
let index = 0

leftArrow.addEventListener('click', () => {
    
    for (let i = 0; i < photos.children.length;i++){
        
        if (photos.children[i].classList.contains('show')) {
            currentSlide = photos.children[i]
            nextSlide = photos.children[i - 1]
            index = i-1
        }
    }
    
    if (currentSlide != photos.firstElementChild) {
        currentSlide.classList.remove('show')
        nextSlide.classList.add('show')
    }else {
        currentSlide.classList.remove('show')
        photos.lastElementChild.classList.add('show')
        index = 4
    }

    for (let i = 0; i < dots.children.length; i++){
        dots.children[i].firstElementChild.classList.remove('active')
    }

    dots.children[index].firstElementChild.classList.add('active')
})

rightArrow.addEventListener('click', () => {
    
    for (let i = 0; i < photos.children.length;i++){
        
        if (photos.children[i].classList.contains('show')) {
            currentSlide = photos.children[i]
            nextSlide = photos.children[i + 1]
            index = i+1
        }
    }

    if (currentSlide != photos.lastElementChild) {
        currentSlide.classList.remove('show')
        nextSlide.classList.add('show')
    } else {
        currentSlide.classList.remove('show')
        photos.firstElementChild.classList.add('show')
        index = 0
    }

    for (let i = 0; i < dots.children.length; i++){
        dots.children[i].firstElementChild.classList.remove('active')
    }

    dots.children[index].firstElementChild.classList.add('active')
})

dots.addEventListener('click', (event) => {
    if (event.target.classList.contains('dot')){
        
        let targetDiv = event.target.closest('div')

        index = Array.from(targetDiv.parentNode.children).indexOf(targetDiv)
        
        for (let i = 0; i < photos.children.length;i++){
           photos.children[i].classList.remove('show')
        }

        photos.children[index].classList.add('show')

        for (let i = 0; i < dots.children.length; i++){
            dots.children[i].firstElementChild.classList.remove('active')
        }

        dots.children[index].firstElementChild.classList.add('active')
    }
})

function timer() {
    
    if (index <= 4) {
        
        for (let i = 0; i < photos.children.length;i++){
           photos.children[i].classList.remove('show')
        }

        photos.children[index].classList.add('show')

        for (let i = 0; i < dots.children.length; i++){
            dots.children[i].firstElementChild.classList.remove('active')
        }

        dots.children[index].firstElementChild.classList.add('active')

        index = index + 1
        
    } else {
        index = 0
    }
}

setInterval(timer, 5000)