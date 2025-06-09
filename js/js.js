// Task 1

const lis = document.querySelectorAll('#categories .item')
console.log(`Всого ul тегів ${lis.length}`);

lis.forEach(item => {
  const category = item.querySelector('h2').textContent;
  const all = item.querySelectorAll('ul li').length;
  console.log(`Категорія: ${category}, Кількість елементів: ${all}`);
});

// task2

const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

const list = document.querySelector('#ingredients');

const items = ingredients.map(ingredient => {
  const li = document.createElement('li');
  li.textContent = ingredient;
  return li;
});

list.append(...items); 

// Task 3


const images = [
 {
  url:
   'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'White and Black Long Fur Cat',
 },
 {
  url:
   'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
 },
 {
  url:
   'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  alt: 'Group of Horses Running',
 },
];

const gallery = document.querySelector('#gallery');

const markup = images
  .map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="300"></li>`)
  .join('');

gallery.insertAdjacentHTML('beforeend', markup);

// Task4
let counterValue = 0;
const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}
incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);
