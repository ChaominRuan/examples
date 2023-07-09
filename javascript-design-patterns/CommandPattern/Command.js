// 命令接口
class Command {
  execute() {
    throw new Error('execute() must be implemented.');
  }
}

// 具体命令类
class ConcreteCommandA extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver.actionA();
  }
}

class ConcreteCommandB extends Command {
  constructor(receiver) {
    super();
    this.receiver = receiver;
  }

  execute() {
    this.receiver.actionB();
  }
}

// 接收者类
class Receiver {
  actionA() {
    console.log('Receiver: Action A executed.');
  }

  actionB() {
    console.log('Receiver: Action B executed.');
  }
}

// 调用者类
class Invoker {
  constructor() {
    this.commands = [];
  }

  addCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach(command => {
      command.execute();
    });
    this.commands = [];
  }
}

// 使用示例
const receiver = new Receiver();
const invoker = new Invoker();

const commandA = new ConcreteCommandA(receiver);
const commandB = new ConcreteCommandB(receiver);

invoker.addCommand(commandA);
invoker.addCommand(commandB);

invoker.executeCommands();
// 输出
// Receiver: Action A executed.
// Receiver: Action B executed.
