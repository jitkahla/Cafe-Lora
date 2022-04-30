import './style.css';
import { Layer } from './Layer/index.js';

console.log('funguju!');

document.querySelector('#nav-btn').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('nav-closed');
});

//skrývání hamburger navigace
const navItems = document.querySelectorAll('nav a');

navItems.forEach((navItem) =>
  navItem.addEventListener('click', () => {
    document.querySelector('nav').classList.add('nav-closed');
  }),
);

//objednávací tlačítko
let ordered = false;

const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
  if (ordered === false) {
    orderBtn.textContent = 'Zrušit';
    document.querySelector('.drink__cup').classList.add('drink__cup--selected');
    ordered = true;
  } else {
    orderBtn.textContent = 'Objednat';
    document
      .querySelector('.drink__cup')
      .classList.remove('drink__cup--selected');
    ordered = false;
  }
});

//zapojení komponenty Layer
const foam = { color: '#feeeca', label: 'mléčná pěna' };
const milk = { color: '#fed7b0', label: 'teplé mléko' };
const coffee = { color: '#613916', label: 'espresso' };

document.querySelector('.drink__info').innerHTML =
  Layer(foam) + Layer(milk) + Layer(coffee);
