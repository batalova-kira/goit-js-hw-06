const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach((el) => {
let elTitle = el.querySelector('h2').textContent;
let quantityEl = el.querySelectorAll('li').length;
    console.log(`Category: ${elTitle}`);
    console.log(`Elements: ${quantityEl}`);
});
