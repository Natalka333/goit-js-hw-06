const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all fields !');
  }
}
