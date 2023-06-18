class RealSubject {
  request() {
    console.log('RealSubject: Handing request');
  }
}

class ProxySubject {
  constructor(realSubject) {
    this.realSubject = realSubject;
  }

  checkAccess() {
    return true;
  }

  request() {
    if (this.checkAccess()) {
      this.realSubject.request();
    }
  }
}

const realSubject = new RealSubject();

const proxy = new ProxySubject(realSubject);
proxy.request(); // RealSubject: Handing request

// ES6 Proxy example
const person = {
  name: 'John Doe',
  age: 42,
  nationality: 'American'
};

const personProxy = new Proxy(person, {
  get: (target, prop) => {
    console.log(`The value of ${prop} is ${Reflect.get(target, prop)}`);
  },
  set: (target, prop, value) => {
    console.log(`Changed ${prop} from ${target[prop]} to ${value}`);
    return Reflect.set(target, prop, value);
  }
});

personProxy.name; // The value of name is John Doe
personProxy.age = 43; // Changed age from 42 to 43
personProxy.name = 'Jane Doe'; // Changed name from John Doe to Jane Doe
