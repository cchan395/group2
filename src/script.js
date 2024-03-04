const navBar = document.querySelector('.nav-bar');
const navBtn = document.querySelector(`.nav-btn`);;
const closeBtn = document.querySelector(`.close-btn`);
const openBtn = document.querySelector(`.open-btn`);
const navLinks = document.querySelectorAll(`.nav-links li a`);
const widthValue = window.innerWidth
const valueChecker = '';

function toggleNav() {
    if (navBar.classList.contains(`show-nav-bar`) && (widthValue < 768)) {
        navBar.classList.remove(`show-nav-bar`);
        closeBtn.style.display = `none`;
        openBtn.style.display = `block`;
        navBar.style.display = 'none';
    } else {
        navBar.classList.add(`show-nav-bar`);
        closeBtn.style.display = `block`;
        openBtn.style.display = `none`;
        navBar.style.display = 'block';
    }
}

navBtn.addEventListener(`click`, toggleNav);
navLinks.forEach(link => { link.addEventListener(`click`, toggleNav) });