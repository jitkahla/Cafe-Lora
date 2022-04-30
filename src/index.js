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

//zapojení komponenty Layer
/*
const layers = [
  { color: '#feeeca', label: 'mléčná pěna' },
  { color: '#fed7b0', label: 'teplé mléko' },
  { color: '#613916', label: 'espresso' },
];

 layers.forEach(
  (item) => (document.querySelector('.drink__info').innerHTML += Layer(item)),
); 
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
};*/

const drinks = [
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    ordered: false,
    layers: [
      {
        color: '#feeeca',
        label: 'mléčná pěna',
      },
      {
        color: '#fed7b0',
        label: 'teplé mléko',
      },
      {
        color: '#613916',
        label: 'espresso',
      },
    ],
    image: 'https://apps.kodim.cz/daweb/cafelora/assets/cups/cappuccino.png',
  },
  {
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
  },
];

drinks.forEach((drink) =>
  document.querySelector('.drinks-list').appendChild(Drink(drink)),
);
