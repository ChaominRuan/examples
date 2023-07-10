import Counter from './Counter.js';

document.querySelector('#Decrement').onclick = () => {
  Counter.decrement();
  document.querySelector('#count').innerHTML = Counter.getCount().toString();
};
