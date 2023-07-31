let counterValue = 0;
const span = document.querySelector('#value');
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');

decrement.addEventListener('click', handlerMinus);
function handlerMinus () {
    span.textContent = `${counterValue -= 1}`;
}

increment.addEventListener('click', handlerSum);
function handlerSum() {
    span.textContent = `${counterValue += 1}`;
}