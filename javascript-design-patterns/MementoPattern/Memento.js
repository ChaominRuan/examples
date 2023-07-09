// 备忘录对象类
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }
}
// 原始对象类
class Originator {
  constructor() {
    this.state = null;
  }

  setState(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  createMemento() {
    return new Memento(this.state);
  }

  restoreMemento(memento) {
    this.state = memento.getState();
  }
}

// 管理者类
class Caretaker {
  constructor() {
    this.mementos = [];
  }

  addMemento(memento) {
    this.mementos.push(memento);
  }

  getMemento(index) {
    return this.mementos[index];
  }
}

// 使用示例
const originator = new Originator();
const caretaker = new Caretaker();

// 设置初始状态
originator.setState('State 1');
console.log('Current state:', originator.getState());

// 创建备忘录并保存状态
const memento1 = originator.createMemento();
caretaker.addMemento(memento1);

// 修改状态
originator.setState('State 2');
console.log('Current state:', originator.getState());

// 创建备忘录并保存状态
const memento2 = originator.createMemento();
caretaker.addMemento(memento2);

// 恢复到第一个备忘录的状态
originator.restoreMemento(caretaker.getMemento(0));
console.log('Restored state:', originator.getState());

// 输出
// Current state: State 1
// Current state: State 2
// Restored state: State 1
