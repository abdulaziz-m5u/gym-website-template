const navToggle = document.getElementById('nav-toggle'),
  navMenu = document.getElementById('nav-menu'),
  navClose = document.getElementById('nav-close');

navToggle.addEventListener('click', function () {
  navMenu.classList.toggle('show-menu');
});

navClose.addEventListener('click', function () {
  navMenu.classList.toggle('show-menu');
});

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link');

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu');
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
