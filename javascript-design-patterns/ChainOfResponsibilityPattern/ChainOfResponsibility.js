// 定义处理者对象
class Handler {
  constructor() {
    this.nextHandler = null;
  }

  setNextHandler(handler) {
    this.nextHandler = handler;
  }

  handleRequest(request) {
    if (this.canHandleRequest(request)) {
      this.processRequest(request);
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(request);
    } else {
      console.log('No handler found for the request.');
    }
  }

  canHandleRequest(request) {
    throw new Error('Abstract method canHandleRequest() must be overridden.');
  }

  processRequest(request) {
    throw new Error('Abstract method processRequest() must be overridden.');
  }
}

// 具体处理者对象
class ConcreteHandler1 extends Handler {
  canHandleRequest(request) {
    return request === 'type1';
  }

  processRequest(request) {
    console.log('ConcreteHandler1 is handling the request.');
  }
}

class ConcreteHandler2 extends Handler {
  canHandleRequest(request) {
    return request === 'type2';
  }

  processRequest(request) {
    console.log('ConcreteHandler2 is handling the request.');
  }
}

// 使用示例
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();

handler1.setNextHandler(handler2);

handler1.handleRequest('type1'); // 输出: ConcreteHandler1 is handling the request.
handler1.handleRequest('type2'); // 输出: ConcreteHandler2 is handling the request.
handler1.handleRequest('type3'); // 输出: No handler found for the request.
