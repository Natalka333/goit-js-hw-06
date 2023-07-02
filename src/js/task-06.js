const textEl = document.querySelector('#validation-input');
// console.log(textEl);
const inputLeng = Number(textEl.dataset.length);
// console.log(inputLeng);

textEl.addEventListener('blur', validationInput);

// function validationInput(value) {
//   const updateText = textEl.value.trim();
//   if (updateText.length === inputLeng) {
//     textEl.classList.remove('invalid');
//     textEl.classList.add('valid');
//   } else {
//     textEl.classList.remove('valid');
//     textEl.classList.add('invalid');
//   }
// }
// прибирає пробіли на початку і в кінці trim();
// 2 спосіб

// function validationInput() {
//   textEl.value.trim().length === inputLeng
//     ? changeClass('valid', 'invalid')
//     : changeClass('invalid', 'valid');
// }

// function changeClass(first, second) {
//   textEl.classList.add(first);
//   textEl.classList.remove(second);
// }
