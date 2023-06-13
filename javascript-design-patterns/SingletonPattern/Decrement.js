import Counter from './Counter';

document.querySelector('#Decrement').onclick = () => {
  Counter.decrement();
  document.querySelector('#count').innerHTML = Counter.getCount().toString();
};
