import './Increment'
import './Decrement'
import Counter from "./Counter";

document.querySelector('#count').innerHTML = Counter.getCount().toString();

import Preson from "./Person";

const zs = new Preson('zs',18);  // Person {name: 'zs', age: 18}
const ls = new Preson('ls',20); // Person {name: 'zs', age: 18}

console.log(zs === ls); // true



