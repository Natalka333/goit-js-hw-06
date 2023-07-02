const textEl = document.querySelector('#name-input');
console.log(textEl);
const spanEl = document.querySelector('#name-output');
console.log(spanEl);

textEl.addEventListener('input', event => {
  spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value !== '') {
  } else {
    spanEl.textContent = 'Anonymous';
  }
});
