// 主题
class Subject {
  constructor() {
    this.observers = [];
  }

  // 添加观察者
  addObserver(observer) {
    this.observers.push(observer);
  }

  // 删除观察者
  removeObserver(observer) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // 通知观察者
  notify() {
    for (let i = 0; i < this.observers.length; i++) {
      this.observers[i].update();
    }
  }
}

// 观察者
class Observer {
  constructor(name) {
    this.name = name;
  }

  // 更新方法
  update() {
    console.log(`Observer ${this.name} received notification.`);
  }
}

// 客户端代码
const subject = new Subject();

const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');
const observer3 = new Observer('Observer 3');

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.addObserver(observer3);

subject.notify();
// Observer Observer 1 received notification.
// Observer Observer 2 received notification.
// Observer Observer 3 received notification.
