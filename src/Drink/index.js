import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  let { name, layers, image, ordered } = props;

  const drinkDiv = document.createElement('div');
  drinkDiv.classList.add('drink');
  drinkDiv.innerHTML = `<div class="drink__product">
  <div class="drink__cup">
    <img
      src="${image}"
    />
  </div>
  <div class="drink__info">
<h3>${name}</h3> 
</div>
</div>
<div class="drink__controls">
<button class="order-btn">Objednat</button>
</div>
`;
  layers.forEach(
    (item) => (drinkDiv.querySelector('.drink__info').innerHTML += Layer(item)),
  );

  //objednávací tlačítko

  const orderBtn = drinkDiv.querySelector('.order-btn');
  orderBtn.addEventListener('click', () => {
    if (!ordered) {
      orderBtn.textContent = 'Zrušit';
      drinkDiv
        .querySelector('.drink__cup')
        .classList.add('drink__cup--selected');
      ordered = true;
    } else {
      orderBtn.textContent = 'Objednat';
      drinkDiv
        .querySelector('.drink__cup')
        .classList.remove('drink__cup--selected');
      ordered = false;
    }
  });

  return drinkDiv;
};
