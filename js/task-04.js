let counterValue = 0;

const decrementBtnRef = document.querySelector("[data-action='decrement']");
const incrementBtnRef = document.querySelector("[data-action='increment']");
const valueRef = document.querySelector('#value');

decrementBtnRef.addEventListener('click', () => {
  counterValue -= 1;

  valueRef.textContent = counterValue;
});

incrementBtnRef.addEventListener('click', () => {
  counterValue += 1;

  valueRef.textContent = counterValue;
});
