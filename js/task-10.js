function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//после чего рендерится коллекция.При нажатии на кнопку Очистить,
//коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>
// <div id="boxes"></div>

// Создай функцию createBoxes(amount),
//   которая принимает один параметр - число.
// Функция создает столько < div >, сколько указано в amount
// и добавляет их в div#boxes.
// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого,
// должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.

const boxes = document.querySelector('#boxes');
const boxNumberInput = document.querySelector('#controls > input');
const createBoxesBtn = document.querySelector('[data-create]');
const destroyBoxesBtn = document.querySelector('[data-destroy]');

createBoxesBtn.addEventListener('click', createBoxes);
destroyBoxesBtn.addEventListener('click', destroyBoxes);

function createBoxes(event) {
  const markup = [];
  let boxHeight = 20;
  let boxWidth = 20;

  if (!boxNumberInput.value) {
    return alert('Введите число!');
  }

  for (let i = 0; i < boxNumberInput.value; i++) {
    markup.push(
      `<div class=box style=background-color:${getRandomHexColor()};width:${(boxHeight += 10)}px;height:${(boxWidth += 10)}px;></div>`
    );
  }

  boxes.insertAdjacentHTML('beforeEnd', markup.join(''));
}

function destroyBoxes() {
  boxes.innerHTML = '';
  boxNumberInput.value = '';
}
