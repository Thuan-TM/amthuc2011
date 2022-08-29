
const nav_bar = document.querySelector('.nav_expand')
const nav_mobile = document.querySelector('.nav_mobile')
const overlay = document.querySelector('.overlay')
const time = document.querySelector('.fa-times')

nav_bar.addEventListener('click', ()=>{
    nav_mobile.classList.add('active')
})

function closeNav(){
    nav_mobile.classList.remove('active')
}

overlay.addEventListener('click', closeNav)
time.addEventListener('click', closeNav)
