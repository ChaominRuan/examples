class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  addItem(item) {
    this.data.push(item);
  }

  getItems() {
    return this.data;
  }
}

// 示例使用
const instance1 = new Singleton();
instance1.addItem('Item 1');

const instance2 = new Singleton();
instance2.addItem('Item 2');

console.log(instance1.getItems()); // 输出: ['Item 1', 'Item 2']
console.log(instance2.getItems()); // 输出: ['Item 1', 'Item 2']
console.log(instance1 === instance2); // 输出: true
