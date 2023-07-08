// 抽象模板类
class Template {
  templateMethod() {
    this.step1();
    this.step2();
    this.step3();
  }

  step1() {
    throw new Error('Abstract method step1() must be overridden.');
  }

  step2() {
    throw new Error('Abstract method step2() must be overridden.');
  }

  step3() {
    throw new Error('Abstract method step3() must be overridden.');
  }
}

// 具体模板类
class ConcreteClass extends Template {
  step1() {
    console.log('ConcreteClass: Step 1');
  }

  step2() {
    console.log('ConcreteClass: Step 2');
  }

  step3() {
    console.log('ConcreteClass: Step 3');
  }
}

// 客户端代码
const concreteClass = new ConcreteClass();
concreteClass.templateMethod();
// ConcreteClass: Step 1
// ConcreteClass: Step 2
// ConcreteClass: Step 3
