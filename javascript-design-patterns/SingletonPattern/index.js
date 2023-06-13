import './Increment';
import './Decrement';
import Counter from './Counter';

import Person from './Person';

document.querySelector('#count').innerHTML = Counter.getCount().toString();

const zs = new Person('zs', 18); // Person {name: 'zs', age: 18}
const ls = new Person('ls', 20); // Person {name: 'zs', age: 18}

console.log(zs === ls); // true
