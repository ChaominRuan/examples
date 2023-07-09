// 元素类
class Element {
  accept(visitor) {
    throw new Error('accept() must be implemented.');
  }
}

// 具体元素类
class ConcreteElementA extends Element {
  accept(visitor) {
    visitor.visitElementA(this);
  }

  operationA() {
    console.log('Operation A performed on ConcreteElementA.');
  }
}

class ConcreteElementB extends Element {
  accept(visitor) {
    visitor.visitElementB(this);
  }

  operationB() {
    console.log('Operation B performed on ConcreteElementB.');
  }
}

// 访问者类
class Visitor {
  visitElementA(element) {
    throw new Error('visitElementA() must be implemented.');
  }

  visitElementB(element) {
    throw new Error('visitElementB() must be implemented.');
  }
}

// 具体访问者类
class ConcreteVisitor extends Visitor {
  visitElementA(element) {
    element.operationA();
  }

  visitElementB(element) {
    element.operationB();
  }
}

// 使用示例
const elements = [new ConcreteElementA(), new ConcreteElementB()];
const visitor = new ConcreteVisitor();

elements.forEach(element => {
  element.accept(visitor);
});
// 输出
// Operation A performed on ConcreteElementA.
// Operation B performed on ConcreteElementB.
