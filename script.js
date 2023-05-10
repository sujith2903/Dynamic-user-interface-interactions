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

leftArrow.addEventListener('click', () => {
    
    let currentSlide
    let nextSlide
    
    for (let i = 0; i < photos.children.length;i++){
        
        if (photos.children[i].classList.contains('show')) {
            currentSlide = photos.children[i]
            nextSlide = photos.children[i-1]
        }
    }
    
    if (currentSlide != photos.firstElementChild) {
        currentSlide.classList.remove('show')
        nextSlide.classList.add('show')
    }else {
        currentSlide.classList.remove('show')
        photos.lastElementChild.classList.add('show')
    }
})

rightArrow.addEventListener('click', () => {
    
    let currentSlide
    let nextSlide
    
    for (let i = 0; i < photos.children.length;i++){
        
        if (photos.children[i].classList.contains('show')) {
            currentSlide = photos.children[i]
            nextSlide = photos.children[i+1]
        }
    }

    if (currentSlide != photos.lastElementChild) {
        currentSlide.classList.remove('show')
        nextSlide.classList.add('show')
    } else {
        currentSlide.classList.remove('show')
        photos.firstElementChild.classList.add('show')
    }
})
