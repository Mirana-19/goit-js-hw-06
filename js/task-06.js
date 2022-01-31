const inputRef = document.querySelector('#validation-input');
const minLength = inputRef.dataset.length;

console.log(inputRef.maxLength);

inputRef.addEventListener('blur', event => {
  if (event.currentTarget.value.length < minLength) {
    onInputInvalid();
  } else {
    onInputValid();
  }
});

function onInputValid() {
  inputRef.classList.remove('invalid');
  inputRef.classList.add('valid');
}

function onInputInvalid() {
  inputRef.classList.remove('valid');
  inputRef.classList.add('invalid');
}
