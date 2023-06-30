// const counterEl = document.querySelector('#counter');
const btnDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
const spanValue = document.querySelector('#value');
const btnIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

btnDecrementEl.addEventListener('click', onDecrementEl);
btnIncrementEl.addEventListener('click', onIncrementEl);

function onDecrementEl() {
  counterValue += Number(btnDecrementEl.textContent);
  spanValue.textContent = counterValue;
}

function onIncrementEl() {
  counterValue += Number(btnIncrementEl.textContent);
  spanValue.textContent = counterValue;
}
