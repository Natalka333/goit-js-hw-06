const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allProductEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const ingredients = document.createElement('li');
  ingredients.classList.add('item');
  ingredients.textContent = `${ingredient}`;

  return ingredients;
});

console.log(elements);
allProductEl.append(...elements);
