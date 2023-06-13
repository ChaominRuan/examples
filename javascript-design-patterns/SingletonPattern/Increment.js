import Counter from './Counter';

document.querySelector('#Increment').onclick = () => {
  Counter.increment();
  document.querySelector('#count').innerHTML = Counter.getCount().toString();
};
