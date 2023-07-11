// 具体车辆类
class SedanCar {
  constructor() {
    this.type = 'sedan';
  }
}

class SUVCar {
  constructor() {
    this.type = 'suv';
  }
}

class SportsCar {
  constructor() {
    this.type = 'sports';
  }
}
// 工厂类
class CarFactory {
  createCar(type) {
    switch (type) {
      case 'sedan':
        return new SedanCar();
      case 'suv':
        return new SUVCar();
      case 'sports':
        return new SportsCar();
      default:
        throw new Error('Can only be sedan or suv or sports');
    }
  }
}

// 示例使用
const factory = new CarFactory();
const sedan = factory.createCar('sedan');
const suv = factory.createCar('suv');
const sports = factory.createCar('sports');

console.log(sedan.type); // 输出: sedan
console.log(suv.type); // 输出: suv
console.log(sports.type); // 输出: sports
