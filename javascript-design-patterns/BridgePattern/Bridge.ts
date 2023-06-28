// 抽象部分
abstract class Shape {
  protected color: Color;

  constructor(color: Color) {
    this.color = color;
  }

  abstract draw(): string;
}

// 实现部分
interface Color {
  fill(): string;
}

// 具体实现部分
class RedColor implements Color {
  fill() {
    return "red";
  }
}

class BlueColor implements Color {
  fill() {
    return "blue";
  }
}

// 具体抽象部分
class Circle extends Shape {
  constructor(color: Color) {
    super(color);
  }

  draw() {
    return `Drawing a ${this.color.fill()} circle.`;
  }
}

class Square extends Shape {
  constructor(color: Color) {
    super(color);
  }

  draw() {
    return `Drawing a ${this.color.fill()} square.`;
  }
}

// 客户端代码
const redColor: Color = new RedColor();
const blueColor: Color = new BlueColor();

const redCircle: Shape = new Circle(redColor);
const blueSquare: Shape = new Square(blueColor);

console.log(redCircle.draw()); // 输出: Drawing a red circle.
console.log(blueSquare.draw()); // 输出: Drawing a blue square.
