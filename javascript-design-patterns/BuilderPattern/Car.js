class Car {
  #color;

  #fuelType;

  #productionDate;

  constructor(color, fuelType, productionDate) {
    this.#color = color;
    this.#fuelType = fuelType;
    this.#productionDate = productionDate;
  }

  toString() {
    return `car info: color: ${this.#color}, fuelType:${this.#fuelType}, productionDate: ${this.#productionDate}`;
  }
}

const car = new Car('red', 'petrol', new Date('2023-05-01')).toString();

console.log(car); // car info: color: red, fuelType:petrol, productionDate: Mon May 01 2023 08:00:00 GMT+0800 (中国标准时间)

class CarBuilder {
  #color;

  #fuelType;

  #productionDate;

  setColor(color) {
    this.#color = color;
    return this;
  }

  setFuelType(fuelType) {
    this.#fuelType = fuelType;
    return this;
  }

  setProductionDate(date) {
    this.#productionDate = date;
    return this;
  }

  build() {
    return new Car(this.#color, this.#fuelType, this.#productionDate);
  }

  toString() {
    return `car info: color: ${this.#color}, fuelType:${this.#fuelType}, productionDate: ${this.#productionDate}`;
  }
}

const car1 = new CarBuilder().setColor('yellow').setFuelType('battery').setProductionDate(new Date('2023-06-02'));
const car2 = new CarBuilder().setFuelType('battery').setProductionDate(new Date('2023-06-03')).setColor('blue');

console.log(car1.toString()); // car info: color: yellow, fuelType:battery, productionDate: Fri Jun 02 2023 08:00:00 GMT+0800 (中国标准时间)
console.log(car2.toString()); // car info: color: blue, fuelType:battery, productionDate: Sat Jun 03 2023 08:00:00 GMT+0800 (中国标准时间)
