import './style.css';
import { Layer } from '../Layer/index.js';

export const Drink = (props) => {
  const { name, layers, image } = props;

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
  return drinkDiv;
};
