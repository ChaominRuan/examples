// 中介者
class Mediator {
  constructor() {
    this.colleagues = [];
  }

  addColleague(colleague) {
    this.colleagues.push(colleague);
  }

  sendMessage(message, sender) {
    for (const colleague of this.colleagues) {
      if (colleague !== sender) {
        colleague.receiveMessage(message);
      }
    }
  }
}

// 同事对象
class Colleague {
  constructor(name, mediator) {
    this.name = name;
    this.mediator = mediator;
  }

  sendMessage(message) {
    this.mediator.sendMessage(message, this);
  }

  receiveMessage(message) {
    console.log(`${this.name} received message: ${message}`);
  }
}

// 使用示例
const mediator = new Mediator();

const colleague1 = new Colleague('Colleague 1', mediator);
const colleague2 = new Colleague('Colleague 2', mediator);
const colleague3 = new Colleague('Colleague 3', mediator);

mediator.addColleague(colleague1);
mediator.addColleague(colleague2);
mediator.addColleague(colleague3);

colleague1.sendMessage('Hello, everyone!'); // 输出: Colleague 2 received message: Hello, everyone!，Colleague 3 received message: Hello, everyone!
colleague2.sendMessage('How are you?'); // 输出: Colleague 1 received message: How are you?，Colleague 3 received message: How are you?
colleague3.sendMessage('Nice to meet you!'); // 输出: Colleague 1 received message: Nice to meet you!，Colleague 2 received message: Nice to meet you!
