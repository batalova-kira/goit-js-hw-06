const body = document.querySelector('body');
const btnChange = document.querySelector('.change-color');
const spanChange = document.querySelector('.color');

btnChange.addEventListener('click', handlerChangeColor);

function handlerChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  spanChange.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
