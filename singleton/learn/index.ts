import counter from "./normalObject";

const redButton = counter;
redButton.increment();

const blueButton = counter;
blueButton.increment();

console.log(redButton.getCount());
console.log(blueButton.getCount());

