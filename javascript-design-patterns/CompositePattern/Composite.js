// 定义 ItemNode 类
class ItemNode {
  constructor(name) {
    this.children = []; // 存储子节点的数组
    this.name = name; // 节点名称
  }

  // 添加子节点
  add(child) {
    this.children.push(child);
  }

  // 移除子节点
  remove(child) {
    const index = this.children.indexOf(child);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  // 获取指定索引的子节点
  getChild(i) {
    return this.children[i];
  }

  // 检查节点是否有子节点
  hasChildren() {
    return this.children.length > 0;
  }
}

// 递归遍历树节点
function traverse(indent, node) {
  console.log(Array(indent).join('--') + node.name); // 打印节点名称，根据缩进级别输出层次结构

  for (let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent + 1, node.getChild(i)); // 递归遍历子节点
  }
}

// 创建树结构并执行遍历
function run() {
  const tree = new ItemNode('root');
  const left = new ItemNode('left');
  const right = new ItemNode('right');
  const leftleft = new ItemNode('leftleft');
  const leftright = new ItemNode('leftright');
  const rightleft = new ItemNode('rightleft');
  const rightright = new ItemNode('rightright');

  tree.add(left);
  tree.add(right);
  tree.remove(right); // 移除并重新添加 right 节点
  tree.add(right);

  left.add(leftleft);
  left.add(leftright);

  right.add(rightleft);
  right.add(rightright);

  traverse(1, tree); // 从根节点开始遍历树
}

run();
// 输出
// root
// --left
// ----leftleft
// ----leftright
// --right
// ----rightleft
// ----rightright
