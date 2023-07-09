// 抽象表达式类
class Expression {
  interpret() {
    throw new Error('interpret() must be implemented.');
  }
}

// 终结符表达式类
class NumberExpression extends Expression {
  constructor(value) {
    super();
    this.value = value;
  }

  interpret() {
    return this.value;
  }
}

// 非终结符表达式类
class AddExpression extends Expression {
  constructor(leftExpression, rightExpression) {
    super();
    this.leftExpression = leftExpression;
    this.rightExpression = rightExpression;
  }

  interpret() {
    return this.leftExpression.interpret() + this.rightExpression.interpret();
  }
}

// 上下文类
class Context {
  constructor() {
    this.expressionStack = [];
  }

  pushExpression(expression) {
    this.expressionStack.push(expression);
  }

  popExpression() {
    return this.expressionStack.pop();
  }
}

// 使用示例
const context = new Context();

const expression1 = new NumberExpression(10);
const expression2 = new NumberExpression(5);
const expression3 = new NumberExpression(2);

const addExpression = new AddExpression(expression1, expression2);
const finalExpression = new AddExpression(addExpression, expression3);

context.pushExpression(finalExpression);
const result = context.popExpression().interpret();

console.log('Result:', result); // 输出: Result: 17
