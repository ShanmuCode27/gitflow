const navbarToggle = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('#nav');
navbarToggle.addEventListener('click', () => {
    navbar.classList.contains('small') ? navbar.classList.remove('small') : navbar.classList.add('small')
})