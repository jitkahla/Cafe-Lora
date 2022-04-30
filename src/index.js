import './style.css';
import { Drink } from './Drink/index.js';

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
/* let ordered = false;

const orderBtn = document.querySelector('.order-btn');
orderBtn.addEventListener('click', () => {
  if (!ordered) {
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
}); */

//zapojení komponenty Layer
const layers = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

/* layers.forEach(
  (item) => (document.querySelector('.drink__info').innerHTML += Layer(item)),
); */
const romano = {
  id: 'romano',
  name: 'Romano',
  ordered: false,
  layers: [
    {
      color: '#fbdf5b',
      label: 'citrón',
    },
    {
      color: '#613916',
      label: 'espresso',
    },
  ],
  image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/romano.png',
};

document.querySelector('.drinks-list').appendChild(Drink(romano));
