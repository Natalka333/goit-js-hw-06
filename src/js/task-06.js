const textEl = document.querySelector('#validation-input');
console.log(textEl);
const inputLeng = Number(textEl.dataset.length);
console.log(inputLeng);

textEl.addEventListener('blur', validationInput);

function validationInput(value) {
  const updateText = textEl.value.trim();
  if (updateText.length === inputLeng) {
    textEl.classList.add('valid');
  } else {
    textEl.classList.add('invalid');
  }
}
