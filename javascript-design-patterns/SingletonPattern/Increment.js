import Counter from './Counter.js';

document.querySelector('#Increment').onclick = () => {
  Counter.increment();
  document.querySelector('#count').innerHTML = Counter.getCount().toString();
};
