class Car {
  #doors;

  addParts() {
    this.#doors = 4;
  }

  say() {
    console.log(`I am a ${this.#doors}-door car`);
  }
}
class Truck {
  #doors;

  addParts() {
    this.#doors = 2;
  }

  say() {
    console.log(`I am a ${this.#doors}-door truck`);
  }
}

class CarBuilder {
  #car;

  step1() {
    this.#car = new Car();
  }

  step2() {
    this.#car.addParts();
  }

  get() {
    return this.#car;
  }
}

class TruckBuilder {
  #truck;

  step1() {
    this.#truck = new Truck();
  }

  step2() {
    this.#truck.addParts();
  }

  get() {
    return this.#truck;
  }
}

class Shop {
  construct(builder) {
    builder.step1();
    builder.step2();
    return builder.get();
  }
}

const shop = new Shop();
const carBuilder = new CarBuilder();
const truckBuilder = new TruckBuilder();

const car = shop.construct(carBuilder);
const truck = shop.construct(truckBuilder);

car.say(); // I am a 4-door car
truck.say(); // I am a 2-door truck
