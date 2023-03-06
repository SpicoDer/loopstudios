const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const navSection = document.querySelector('#nav-section');
const contact = document.querySelector('#contact-btn');
const header = document.querySelector('header');

// Scroll padding
const navHeight = nav.offsetHeight;
document.documentElement.style.setProperty(
  '--scroll-padding',
  navHeight + 'px'
);

// State of menu
menuBtn.addEventListener('click', () => {
  menuBtn.toggleAttribute('data-open');
  menu.classList.toggle('disable');
  menu.classList.toggle('enable');
});

// Scrolling effect

const rect = header.getBoundingClientRect();

window.onscroll = function () {
  navSection.classList.add('bg-prim-600');
  contact.classList.add('bg-prim-400');

  if (window.scrollY < 1) {
    navSection.classList.remove('bg-prim-600');
    contact.classList.add('bg-prim-400');
  }

  if (window.scrollY > rect.height) {
    menu.classList.add('disable');
    menu.classList.remove('enable');
    menuBtn.removeAttribute('data-open');
  }
};
