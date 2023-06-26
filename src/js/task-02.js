const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const allProductEl = document.querySelector('#ingredients');
const element = allProductEl.map(igredient => {
  const ingredients = document.createElement('li');
  ingredients.textContent = igredient.name;
  ingredients.classList.add('item');

  return ingredients;
});

console.log(element);

// const firstListEl = document.createElement('li');
// firstListEl.textContent = 'Potatoes';
// firstListEl.classList.add('item');
// const secondListEl = document.createElement('li');
// secondListEl.textContent = 'Mushrooms';
// secondListEl.classList.add('item');
// const thirdListEl = document.createElement('li');
// thirdListEl.textContent = 'Garlic';
// thirdListEl.classList.add('item');
// const fourthListEl = document.createElement('li');
// fourthListEl.textContent = 'Tomatos';
// fourthListEl.classList.add('item');
// const fifthListEl = document.createElement('li');
// fifthListEl.textContent = 'Herbs';
// fifthListEl.classList.add('item');
// const sixthListEl = document.createElement('li');
// sixthListEl.textContent = 'Condiments';
// sixthListEl.classList.add('item');

// const ingredientsEl = document.querySelector('#ingredients');

// ingredientsEl.append(
//   firstListEl,
//   secondListEl,
//   thirdListEl,
//   fourthListEl,
//   fifthListEl,
//   sixthListEl
// );
// console.log(ingredientsEl);
