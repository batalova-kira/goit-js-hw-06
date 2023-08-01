//Створюємо об'єкт елементів
const elements = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  divBoxes: document.querySelector('#boxes')
}

//Додаємо слухаччів на події
elements.btnCreate.addEventListener('click', () => {
  const amount = Number(elements.input.value);
  createBoxes(amount);
});
elements.btnDestroy.addEventListener('click', destroyBoxes);

//Функція створення боксів
function createBoxes(amount) {
  let size = 30;
  const arr = [];
  for (let i = 0; i < amount; i += 1) {
    size += 10;
    const div = document.createElement('div');
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.backgroundColor = getRandomHexColor();
    arr.push(div);
  }
  elements.divBoxes.append(...arr);
  elements.input.value = '';
}

//Функція очищення боксів
function destroyBoxes() {
  elements.divBoxes.innerHTML = '';
  elements.input.value = 0;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
