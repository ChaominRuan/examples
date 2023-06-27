// 抽象组件
class Coffee {
  getCost() {
    return 10;
  }

  getDescription() {
    return 'Coffee';
  }
}

// 具体组件
class Espresso extends Coffee {
  getCost() {
    return 15;
  }

  getDescription() {
    return 'Espresso';
  }
}

// 抽象装饰者
class CoffeeDecorator extends Coffee {
  constructor(coffee) {
    super();
    this.coffee = coffee;
  }

  getCost() {
    return this.coffee.getCost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// 具体装饰者
class MilkDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getCost() {
    return this.coffee.getCost() + 5;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, Milk`;
  }
}

// 具体装饰者
class SugarDecorator extends CoffeeDecorator {
  constructor(coffee) {
    super(coffee);
  }

  getCost() {
    return this.coffee.getCost() + 2;
  }

  getDescription() {
    return `${this.coffee.getDescription()}, Sugar`;
  }
}

const coffee = new Espresso();
const coffeeWithMilk = new MilkDecorator(coffee);
const coffeeWithMilkAndSugar = new SugarDecorator(coffeeWithMilk);

console.log(coffee.getCost()); // 输出: 15
console.log(coffee.getDescription()); // 输出: Espresso

console.log(coffeeWithMilk.getCost()); // 输出: 20
console.log(coffeeWithMilk.getDescription()); // 输出: Espresso, Milk

console.log(coffeeWithMilkAndSugar.getCost()); // 输出: 22
console.log(coffeeWithMilkAndSugar.getDescription()); // 输出: Espresso, Milk, Sugar
