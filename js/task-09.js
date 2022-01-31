function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorNameRef = document.querySelector('.color');
const changeColorBtnRef = document.querySelector('.change-color');

changeColorBtnRef.addEventListener('click', changeBodyColor);

function changeBodyColor(event) {
  const currentColor = getRandomHexColor();

  document.body.style.backgroundColor = currentColor;
  colorNameRef.textContent = currentColor;
}
