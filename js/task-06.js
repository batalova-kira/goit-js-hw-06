const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerLength);

function handlerLength(evt) {
    if (evt.currentTarget.value.length === Number(input.dataset.length)) {
        evt.currentTarget.classList.add('valid');
        evt.currentTarget.classList.remove('invalid');
    } else {
        evt.currentTarget.classList.remove('valid');
        evt.currentTarget.classList.add('invalid');
        }
    }
