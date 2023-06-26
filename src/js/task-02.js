const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const firstListEl = document.createElement('li');
firstListEl.textContent = 'Potatoes';
firstListEl.classList.add('item');
const secondListEl = document.createElement('li');
secondListEl.textContent = 'Mushrooms';
secondListEl.classList.add('item');
const thirdListEl = document.createElement('li');
thirdListEl.textContent = 'Garlic';
thirdListEl.classList.add('item');
const fourthListEl = document.createElement('li');
fourthListEl.textContent = 'Tomatos';
fourthListEl.classList.add('item');
const fifthListEl = document.createElement('li');
fifthListEl.textContent = 'Herbs';
fifthListEl.classList.add('item');
const sixthListEl = document.createElement('li');
sixthListEl.textContent = 'Condiments';
sixthListEl.classList.add('item');

const ingredientsEl = document.querySelector('#ingredients');

ingredientsEl.append(
  firstListEl,
  secondListEl,
  thirdListEl,
  fourthListEl,
  fifthListEl,
  sixthListEl
);
console.log(ingredientsEl);
