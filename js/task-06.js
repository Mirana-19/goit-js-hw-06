const inputRef = document.querySelector('#validation-input');
const minLength = Number(inputRef.dataset.length);

console.log(inputRef.maxLength);

inputRef.addEventListener('blur', event => {
  if (event.currentTarget.value.length === minLength) {
    onInputValid();
  } else {
    onInputInvalid();
  }
  console.log(minLength);
});

function onInputValid() {
  inputRef.classList.remove('invalid');
  inputRef.classList.add('valid');
}

function onInputInvalid() {
  inputRef.classList.remove('valid');
  inputRef.classList.add('invalid');
}
