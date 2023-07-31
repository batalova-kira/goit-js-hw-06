//Створюємо об'єкт елементів
const elements = {
  div: document.querySelector('#controls'),
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes')
}

//Додаємо слухаччів на події
elements.btnCreate.addEventListener('click', createBoxes);
elements.btnDestroy.addEventListener('click', destroyBoxes);

//Функція створення боксів - не можу збудувати логику ... ((
function createBoxes(amount) {
  // змінна для створення боксів
  let boxesCreate = () => creareBoxes(Number(elements.input.value));
  // вимога створення боксів, якщо введено число >1 i <100
  if (boxesCreate > 1 && boxesCreate < 100) {
    const divEl = document.createElement("div");
    divEl.setAttribute('id', 'box');
    divEl.style.width = squareEl.style.height = '30px';
    divEl.style.backgroundColor = 'teal';
  }
  for (let i = 0; i < amount; i += 1) {
  // збыльшення розмірів ...
  divEl.style.width = squareEl.clientWidth + 10 + 'px';
  divEl.style.height = squareEl.clientHeight + 10 + 'px';
  
}
}

//Функція створення боксів
function destroyBoxes() {
  elements.divBoxes.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
