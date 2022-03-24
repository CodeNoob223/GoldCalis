const hamburgerIcon = document.getElementById("hamburger-menu-icon")
const closeIcon = document.getElementById("close-icon")
const navLinks = document.querySelector('.nav__links')

const searchIcon = document.getElementById("search-icon")
const searchBar = document.getElementById("search-bar")
const navContainer = document.getElementById("nav-container")
const logo = document.querySelector('.logo')

const shopContainer = document.getElementById("shop-container")
const shop = document.getElementById("shop")
const programContainer = document.getElementById("program-container")
const workoutContainer = document.getElementById("workout-container")
const articleContainer = document.getElementById("article-container")

hamburgerIcon.addEventListener("click", function() {
    hamburgerIcon.classList.toggle('active')
    navLinks.classList.toggle('active')
    shopContainer.classList.remove("active")
    programContainer.classList.remove("active")
    workoutContainer.classList.remove("active")
    articleContainer.classList.remove("active")
    searchBar.classList.remove('active')
})

searchIcon.addEventListener("click",function searchBarToggle() {
    searchBar.classList.toggle('active')
    navLinks.classList.remove('active')
    hamburgerIcon.classList.remove('active')
})

shopContainer.addEventListener('click', function() {
    shopContainer.classList.toggle("active")
    programContainer.classList.remove("active")
    workoutContainer.classList.remove("active")
    articleContainer.classList.remove("active")
})

programContainer.addEventListener('click', function() {
    shopContainer.classList.remove("active")
    programContainer.classList.toggle("active")
    workoutContainer.classList.remove("active")
    articleContainer.classList.remove("active")
})

workoutContainer.addEventListener('click', function() {
    shopContainer.classList.remove("active")
    programContainer.classList.remove("active")
    workoutContainer.classList.toggle("active")
    articleContainer.classList.remove("active")
})

articleContainer.addEventListener('click', function() {
    shopContainer.classList.remove("active")
    programContainer.classList.remove("active")
    workoutContainer.classList.remove("active")
    articleContainer.classList.toggle("active")
})