const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', handlerName);

function handlerName() {
    if (input.value === '') {
        return span.textContent = 'Anonymous';
    }
    return span.textContent = input.value;
}