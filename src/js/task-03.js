const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const picturesEl = document.querySelector('.gallery');
console.log(picturesEl);

const newItemEl = document.createElement('li');
newItemEl.classList.add('item');
console.log(newItemEl);

const elements = images.map(option => {
  const newImagesEl = document.createElement('img');
  newImagesEl.style.backgroundImage = option.url;
  newImagesEl.alt = option.alt;
  return newImagesEl;
});

console.log(...elements);

// const elements = images
//   .map(image => {
//     const newImagesEl = document.createElement('img');
//     newImagesEl.url = `${image}`;
//     newImagesEl.alt = `${image}`;

//     return images;
//   })
//   .join('');
// console.log(images);

newItemEl.append(images);
// console.log(newItemEl);

// picturesEl.insertAdjacentHTML('afterend', newItemEl);
