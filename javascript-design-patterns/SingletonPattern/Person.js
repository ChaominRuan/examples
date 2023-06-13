import SingletonPattern from './SingletonPattern';

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

export default SingletonPattern(Person);
