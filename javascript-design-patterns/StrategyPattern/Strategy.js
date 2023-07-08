// 定义策略对象
const strategies = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// 定义环境对象
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(a, b) {
    return this.strategy(a, b);
  }
}

// 使用示例
const context = new Context(strategies.add);
console.log(context.executeStrategy(5, 3)); // 输出: 8

context.setStrategy(strategies.subtract);
console.log(context.executeStrategy(5, 3)); // 输出: 2

context.setStrategy(strategies.multiply);
console.log(context.executeStrategy(5, 3)); // 输出: 15
