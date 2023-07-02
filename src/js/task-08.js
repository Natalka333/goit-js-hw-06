const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', onSubmit);

// function onSubmit(event) {
//   event.preventDefault();
//   const {
//     elements: { email, password },
//   } = event.currentTarget;

//   if (email.value === '' || password.value === '') {
//     alert('Please fill in all fields !');
//   }
//   console.log(`Email:${email.value}, Password:${password.value}`);
//   event.currentTarget.reset();
// }

// вариант2(
// function onSubmit(event) {
//   event.preventDefault();
//   const emailInput = formEl.elements.email;
//   const passwordInput = formEl.elements.password;

//   if (emailInput.value === '' || passwordInput.value === '') {
//     alert('Please fill in all fields !');
//   } else {
//     const formElData = {
//       email: emailInput.value,
//       password: passwordInput.value,
//     };

//     console.log(formElData);
//     formEl.reset();
//   }
// }
