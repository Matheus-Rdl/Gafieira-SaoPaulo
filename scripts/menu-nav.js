//const btnClose = document.getElementById('menu-close');
const btnOpen = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');
const shadow = document.getElementById('nav-shadow')

btnOpen.addEventListener('click', function() {
    nav.classList.add('nav-open');
    shadow.style.visibility = 'visible';
    shadow.style.opacity = '0.6';
});

/*
btnClose.addEventListener('click', function() {
    nav.classList.remove('nav-open');
    shadow.style.visibility = 'hidden';
    shadow.style.opacity = '0';
});
*/

shadow.addEventListener('click', function() {
    nav.classList.remove('nav-open');
    shadow.style.visibility = 'hidden';
    shadow.style.opacity = '0';
});

