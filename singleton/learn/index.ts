import counter from "./counter";

const redButton = counter.getInstance();
redButton.increment();

const blueButton = counter.getInstance();
blueButton.increment();

console.log(redButton.getCount());
console.log(blueButton.getCount());

