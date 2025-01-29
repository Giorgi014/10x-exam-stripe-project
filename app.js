const openBtn = document.querySelector('#burger-button');
const btnIcon = document.querySelector('#burger-button-icon');
const headerContainer = document.querySelector('header');
const headerIcon = document.querySelector('.header-icon');
const navBar = document.querySelector('nav');
const contactBtn = document.querySelector('.contact');
const sgnIn = document.querySelector('.sign-in');

openBtn.addEventListener('click', () => {

    if (openBtn.classList.contains('active')) {
        openBtn.classList.remove('active')
        headerContainer.classList.remove('active');
        headerIcon.classList.remove('active');
        navBar.classList.remove('active');
        contactBtn.classList.remove('active');
        sgnIn.classList.remove('active');
        btnIcon.classList.add('fa-bars')
        btnIcon.classList.remove('fa-xmark')
    } else {
        openBtn.classList.add('active')
        headerContainer.classList.add('active');
        headerIcon.classList.add('active');
        navBar.classList.add('active');
        contactBtn.classList.add('active');
        sgnIn.classList.add('active');
        btnIcon.classList.add('fa-xmark')
        btnIcon.classList.remove('fa-bars')
    }
});