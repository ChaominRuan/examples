// 定义享元对象
class Flyweight {
  constructor(key) {
    this.key = key;
  }

  operation(extrinsicState) {
    console.log(`Flyweight ${this.key} operation with extrinsic state: ${extrinsicState}`);
  }
}

// 具体享元对象
class ConcreteFlyweight extends Flyweight {
  constructor(key) {
    super(key);
  }
}

// 创建享元工厂
class FlyweightFactory {
  constructor() {
    this.flyweights = {};
  }

  getFlyweight(key) {
    if (!this.flyweights[key]) {
      this.flyweights[key] = new ConcreteFlyweight(key);
    }
    return this.flyweights[key];
  }

  getFlyweightsCount() {
    return Object.keys(this.flyweights).length;
  }
}

// 客户端代码
const factory = new FlyweightFactory();

const flyweight1 = factory.getFlyweight('key1');
flyweight1.operation('state1');

const flyweight2 = factory.getFlyweight('key2');
flyweight2.operation('state2');

const flyweight3 = factory.getFlyweight('key1');
flyweight3.operation('state3');

console.log(`Total flyweights: ${factory.getFlyweightsCount()}`);
// 输出
// Flyweight key1 operation with extrinsic state: state1
// Flyweight key2 operation with extrinsic state: state2
// Flyweight key1 operation with extrinsic state: state3
// Total flyweights: 2
