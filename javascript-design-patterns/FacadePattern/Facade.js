// 子系统A
class SubsystemA {
  operationA() {
    return 'Subsystem A operation';
  }
}

// 子系统B
class SubsystemB {
  operationB() {
    return 'Subsystem B operation';
  }
}

// 子系统C
class SubsystemC {
  operationC() {
    return 'Subsystem C operation';
  }
}

// 外观类
class Facade {
  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
  }

  operation() {
    const resultA = this.subsystemA.operationA();
    const resultB = this.subsystemB.operationB();
    const resultC = this.subsystemC.operationC();

    return `${resultA}\n${resultB}\n${resultC}`;
  }
}

// 客户端代码
const facade = new Facade();
const result = facade.operation();
console.log(result);
// 输出:
// Subsystem A operation
// Subsystem B operation
// Subsystem C operation
