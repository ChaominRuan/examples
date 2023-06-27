// 目标接口
class Charger {
  connect() {
    throw new Error("Method 'connect' must be implemented.");
  }

  charge() {
    throw new Error("Method 'charge' must be implemented.");
  }
}

// 原始类
class OldCharger {
  plugIn() {
    console.log('Plugging in old charger.');
  }

  electricCharge() {
    console.log('Charging with old charger.');
  }
}

// 适配器类
class ChargerAdapter extends Charger {
  constructor(oldCharger) {
    super();
    this.oldCharger = oldCharger;
  }

  connect() {
    this.oldCharger.plugIn();
  }

  charge() {
    this.oldCharger.electricCharge();
  }
}

// 客户端代码
function chargeDevice(charger) {
  charger.connect();
  charger.charge();
}

const oldCharger = new OldCharger();
const chargerAdapter = new ChargerAdapter(oldCharger);

chargeDevice(chargerAdapter);
// 输出:
// Plugging in old charger.
// Charging with old charger.
