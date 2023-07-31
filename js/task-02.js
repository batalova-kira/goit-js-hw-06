const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients');

function createMarkup(arr) {
  const markup = arr.map(el => {
    const li = document.createElement('li');
    li.textContent = el;
    li.className = 'item';
    return li;
  });

  list.append(...markup);
}

createMarkup(ingredients);
