// 抽象订单状态类
class OrderState {
  constructor(order) {
    this.order = order;
  }

  pay() {
    throw new Error('pay() must be implemented.');
  }

  ship() {
    throw new Error('ship() must be implemented.');
  }

  complete() {
    throw new Error('complete() must be implemented.');
  }
}

class CompletedState extends OrderState {
  // 可以不实现任何方法，表示订单已完成且没有更改的操作
}

class ShippedState extends OrderState {
  complete() {
    console.log('Order is completed.');
    this.order.setState(new CompletedState(this.order));
  }
}
class PaidState extends OrderState {
  ship() {
    console.log('Order is shipped.');
    this.order.setState(new ShippedState(this.order));
  }
}

// 具体订单状态类
class PendingPaymentState extends OrderState {
  pay() {
    console.log('Payment received. Order is now paid.');
    this.order.setState(new PaidState(this.order));
  }
}

// 订单类
class Order {
  constructor() {
    this.state = new PendingPaymentState(this);
  }

  setState(state) {
    this.state = state;
  }

  pay() {
    this.state.pay();
  }

  ship() {
    this.state.ship();
  }

  complete() {
    this.state.complete();
  }
}

// 使用示例
const order = new Order();
order.pay(); // 输出: Payment received. Order is now paid.
order.ship(); // 输出: Order is shipped.
order.complete(); // 输出: Order is completed.
