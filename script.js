const userIcon1 = document.querySelector("#user-container a .number-tag");
let isLogin = `
    <img class="header-user-avatar" src="./figma SVG icons/avatar.svg" alt="">Minh Quân
    <span class="number-tag hide"></span>
`
let notLogin = `
    <img class="header-user-avatar" src="./figma SVG icons/user.svg" alt="">Khách
    <span class="number-tag hide"></span>
`
const userNameHolder = document.querySelector("#user1-container a.drop-down-title");
const userIcon2 = document.querySelector("#user1-container a .number-tag");
const carts = document.querySelectorAll(".drop-down-item.cart .number-tag");
const userAvatar = document.querySelectorAll(".header-user-avatar");
function getCartNumber() {
    const cartNumber = `<p>2</p>`;
    carts.forEach(element => {
        element.innerHTML = cartNumber;
    });
    userIcon1.innerHTML = cartNumber;
    userIcon2.innerHTML = cartNumber;
};

const cartBtn = document.querySelectorAll(".drop-down-item.cart");
const accountBtn = document.querySelectorAll(".drop-down-item.account");
const logoutBtn = document.querySelectorAll(".drop-down-item.logout");
const loginBtn = document.querySelectorAll(".drop-down-item.login");

function checkAuth(auth) {
    if (auth === true) {
        userAvatar.forEach(el => {
            return el.src = "./figma SVG icons/avatar.svg";
        });
        cartBtn.forEach(el => {
            return el.classList.remove("hide");
        });
        accountBtn.forEach(el => {
            return el.classList.remove("hide");
        });
        logoutBtn.forEach(el => {
            return el.classList.remove("hide");
        });
        loginBtn.forEach(el => {
            return el.classList.add("hide");
        });
        userIcon1.classList.remove("hide");
        userIcon2.classList.remove("hide");
        userNameHolder.innerHTML = isLogin
        .then(getCartNumber());
    } else if (auth === false) {
        userAvatar.forEach(el => {
            return el.src = "./figma SVG icons/user.svg";
        });
        cartBtn.forEach(el => {
            return el.classList.add("hide");
        });
        accountBtn.forEach(el => {
            return el.classList.add("hide");
        });
        logoutBtn.forEach(el => {
            return el.classList.add("hide");
        });
        loginBtn.forEach(el => {
            return el.classList.remove("hide");
        });
        userIcon1.classList.add("hide");
        userIcon2.classList.add("hide");
        userNameHolder.innerHTML = notLogin;
        let path = window.location.pathname;
        if (path === "/userprofile.html" || path === "/userprofile.html#" || path === "/cart.html#" || path === "/cart.html" || path === "/checkout.html#" || path === "/checkout.html") {
            window.location.replace("/dangnhap.html");   
        }
    }
}

async function getAuth() {
    let auth = await JSON.parse(localStorage.getItem("auth"));
    if (auth === null) {
        localStorage.setItem("auth", "false");
        auth = await JSON.parse(localStorage.getItem("auth"));
        checkAuth(auth);
    } else {
        checkAuth(auth);
    }
}
getAuth();

async function logOut() {
    localStorage.setItem("auth", "false");
    let auth = await JSON.parse(localStorage.getItem("auth"));
    checkAuth(auth);
}

const hamburgerIcon = document.getElementById("hamburger-menu-icon");
const closeIcon = document.getElementById("close-icon");
const navLinks = document.querySelector('.nav__links');

const searchIcon = document.getElementById("search-icon");
const searchBar = document.getElementById("search-bar");
const navContainer = document.getElementById("nav-container");
const logo = document.querySelector('.logo');

const user1Container = document.getElementById("user1-container");
let user1ContainerDropDownContent = document.querySelector("#user1-container div.drop-down-content");

const programContainer = document.getElementById("program-container");

function checkOut() {
    window.location.replace("/checkout.html");
}
logo.addEventListener("click", () => {
    window.location.replace("/index.html");
});

hamburgerIcon.addEventListener("click", function() {
    hamburgerIcon.classList.toggle('active');
    navLinks.classList.toggle('active');
    searchBar.classList.remove('active');
});

searchIcon.addEventListener("click",function searchBarToggle() {
    searchBar.classList.toggle('active');
    navLinks.classList.remove('active');
    hamburgerIcon.classList.remove('active');
});

user1Container.addEventListener('click', function() {
    let auth = JSON.parse(localStorage.getItem("auth"));
    if (auth === true) {
        user1Container.classList.toggle("active");
        userIcon2.classList.toggle("hide");
    } else if (auth === false) {
        user1Container.classList.toggle("active");
        userIcon2.classList.add("hide");
        user1ContainerDropDownContent.style.marginBottom = "3rem";
    }
});


document.querySelector(".scroll-up-btn").addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: 'smooth'});    
});
