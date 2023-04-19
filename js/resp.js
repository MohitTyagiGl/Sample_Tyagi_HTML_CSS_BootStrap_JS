

burger  = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
searchBtn = document.querySelector('.searchBtn')


burger.addEventListener('click', ()=>{
rightNav.classList.toggle('v-class-resp')
navList.classList.toggle('v-class-resp')
navbar.classList.toggle('h-nav-resp')
})
searchBtn.addEventListener('click', ()=>{
    console.log("Search tapped TT")
})
