class Iterator {
  constructor(collection) {
    this.collection = collection;
    this.index = 0;
  }

  next() {
    return this.collection[this.index++];
  }

  hasNext() {
    return this.index < this.collection.length;
  }
}

// 使用示例
const names = ['Alice', 'Bob', 'Charlie', 'Dave'];
const iterator = new Iterator(names);

while (iterator.hasNext()) {
  console.log(iterator.next());
}
// 输出：
// Alice
// Bob
// Charlie
// Dave
