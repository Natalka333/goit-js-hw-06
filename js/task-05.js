const textEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

textEl.addEventListener('input', event => {
  spanEl.textContent = event.currentTarget.value;
  if (event.currentTarget.value !== '') {
  } else {
    spanEl.textContent = 'Anonymous';
  }
});
