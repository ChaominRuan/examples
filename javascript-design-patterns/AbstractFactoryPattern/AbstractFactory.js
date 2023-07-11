// 抽象工厂类
class AbstractCarFactory {
  createSedanCar() {
    throw new Error('This method must be implemented.');
  }

  createSUVCar() {
    throw new Error('This method must be implemented.');
  }
}

// 具体产品类 - 奔驰轿车
class MercedesSedanCar {
  constructor() {
    this.type = 'Mercedes Sedan';
  }
}

// 具体产品类 - 奔驰SUV
class MercedesSUVCar {
  constructor() {
    this.type = 'Mercedes SUV';
  }
}

// 具体产品类 - 宝马轿车
class BMWSedanCar {
  constructor() {
    this.type = 'BMW Sedan';
  }
}

// 具体产品类 - 宝马SUV
class BMWSUVCar {
  constructor() {
    this.type = 'BMW SUV';
  }
}

// 具体工厂类 - 奔驰车工厂
class MercedesCarFactory extends AbstractCarFactory {
  createSedanCar() {
    return new MercedesSedanCar();
  }

  createSUVCar() {
    return new MercedesSUVCar();
  }
}

// 具体工厂类 - 宝马车工厂
class BMWCarFactory extends AbstractCarFactory {
  createSedanCar() {
    return new BMWSedanCar();
  }

  createSUVCar() {
    return new BMWSUVCar();
  }
}

// 示例使用
const mercedesFactory = new MercedesCarFactory();
const mercedesSedan = mercedesFactory.createSedanCar();
const mercedesSUV = mercedesFactory.createSUVCar();

const bmwFactory = new BMWCarFactory();
const bmwSedan = bmwFactory.createSedanCar();
const bmwSUV = bmwFactory.createSUVCar();

console.log(mercedesSedan.type); // 输出: Mercedes Sedan
console.log(mercedesSUV.type); // 输出: Mercedes SUV
console.log(bmwSedan.type); // 输出: BMW Sedan
console.log(bmwSUV.type); // 输出: BMW SUV
