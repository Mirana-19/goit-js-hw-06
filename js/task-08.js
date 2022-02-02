const refs = {
  form: document.querySelector('.login-form'),
  email: document.querySelector('[type="email"]'),
  password: document.querySelector('[type="password"]'),
  submit: document.querySelector('button'),
};

refs.form.addEventListener('submit', checkValidation);

function checkValidation(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    event.currentTarget.reset();
    return alert('Пожалуйста, заполните все поля!');
  } else {
    console.log({
      email: email.value,
      password: password.value,
    });
    event.currentTarget.reset();
  }
}
