const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

input.addEventListener('input', handlerFont);

function handlerFont(evt) {
    span.style.fontSize = `${evt.currentTarget.value}px`;
}