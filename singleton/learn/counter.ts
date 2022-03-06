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

// 利用者側から変更できなくする
const counter = Object.freeze(new Counter());
export default counter;

