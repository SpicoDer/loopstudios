const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('#menu-links');

menu.addEventListener('click', () => {
  menu.classList.toggle('open');
  menuLinks.classList.toggle('disable');
  menuLinks.classList.toggle('enable');
});
