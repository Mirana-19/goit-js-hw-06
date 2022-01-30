const inputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

inputRef.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.currentTarget.value) {
    return (nameOutputRef.textContent = event.currentTarget.value);
  }
  nameOutputRef.textContent = 'Anonymous';
}
