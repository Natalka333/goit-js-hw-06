const categoriesAll = document.querySelectorAll('.item').length;
console.log(`Number of categories: ${categoriesAll}`);

const categoriesList = document.querySelectorAll('.item');

categoriesList.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});

// 2 вариант
// categoriesList.forEach(category => {
//   const categoryName = category.firstElementChild.textContent;
//   const categoryElements = category.lastElementChild.children.length;
//   console.log(`Category: ${categoryName}`);
//   console.log(`Elements: ${categoryElements}`);
// });


