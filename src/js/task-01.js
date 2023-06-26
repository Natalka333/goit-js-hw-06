const categoriesEl = document.querySelectorAll('.item');
console.log(categoriesEl);
const itemEl = document.querySelectorAll('.item > h2');
console.log(itemEl);
itemEl.forEach(item => {
  console.log(item);
});
