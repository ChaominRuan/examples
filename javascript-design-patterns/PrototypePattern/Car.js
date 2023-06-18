// 原型对象
const carPrototype = {
  color: 'red',
  getColor() {
    console.log(`The car color is ${this.color}`);
  }
};

// 创建新对象并继承原型
const car1 = Object.create(carPrototype);
car1.getColor(); // The car is red

// 自定义新对象的属性和方法
car1.doors = 4;
car1.getDoors = function () {
  console.log(`The car doors is ${this.doors}`);
};

car1.getDoors(); // The car doors is 4

// 创建另一个新对象并继承原型
const car2 = Object.create(carPrototype);
car2.color = 'black';
car2.getColor(); // The car color is black
