import './style.css';

console.log('funguju!');

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

const navItems = document.querySelectorAll('nav a');

navItems.forEach((navItem) =>
  navItem.addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  }),
);
