let instance;
let count = 0;

class Counter {
  constructor () {
    if(instance) {
      // インスタンスが既に存在する場合に、1つしか作れないことを知らせる
      throw new Error("You can only create one instance!");
    } else {
      instance = this;
    }
  }

  getInstance () {
    return this;
  }

  getCount () {
    return count;
  }

  increment () {
    return ++count;
  }

  decrement () {
    return --count;
  }
}

const counter = new Counter();
const counter2 = new Counter();

