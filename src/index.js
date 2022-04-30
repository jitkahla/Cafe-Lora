import './style.css';

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
